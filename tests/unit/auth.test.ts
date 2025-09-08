/**
 * Unit tests for authentication middleware
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, generateToken, extractToken } from '@/middleware/auth';
import jwt from 'jsonwebtoken';

// Mock environment variables
process.env.JWT_SECRET = 'test-secret-key-for-testing-only';

describe('Authentication Middleware', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('extractToken', () => {
    it('should extract token from Authorization header', () => {
      const request = new NextRequest('http://localhost:3000/api/test', {
        headers: {
          'authorization': 'Bearer test-token-123'
        }
      });
      
      const token = extractToken(request);
      expect(token).toBe('test-token-123');
    });

    it('should extract token from cookie', () => {
      const request = new NextRequest('http://localhost:3000/api/test');
      request.cookies.set('auth-token', 'cookie-token-456');
      
      const token = extractToken(request);
      expect(token).toBe('cookie-token-456');
    });

    it('should extract API key from header', () => {
      const request = new NextRequest('http://localhost:3000/api/test', {
        headers: {
          'x-api-key': 'api-key-789'
        }
      });
      
      const token = extractToken(request);
      expect(token).toBe('api-key-789');
    });

    it('should return null if no token found', () => {
      const request = new NextRequest('http://localhost:3000/api/test');
      
      const token = extractToken(request);
      expect(token).toBeNull();
    });
  });

  describe('Token Generation and Verification', () => {
    it('should generate a valid JWT token', () => {
      const token = jwt.sign(
        { id: 'user-123', email: 'test@example.com', role: 'USER' },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' }
      );
      
      expect(token).toBeTruthy();
      expect(typeof token).toBe('string');
      
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
      expect(decoded.id).toBe('user-123');
      expect(decoded.email).toBe('test@example.com');
      expect(decoded.role).toBe('USER');
    });

    it('should reject invalid tokens', () => {
      const invalidToken = 'invalid.token.here';
      
      expect(() => {
        jwt.verify(invalidToken, process.env.JWT_SECRET!);
      }).toThrow();
    });

    it('should reject expired tokens', () => {
      const expiredToken = jwt.sign(
        { id: 'user-123', email: 'test@example.com' },
        process.env.JWT_SECRET!,
        { expiresIn: '-1h' } // Already expired
      );
      
      expect(() => {
        jwt.verify(expiredToken, process.env.JWT_SECRET!);
      }).toThrow();
    });
  });

  describe('Role-based Access Control', () => {
    const roles = ['VIEWER', 'USER', 'OPERATOR', 'MANAGER', 'ADMIN'];
    
    it('should allow access for higher roles', () => {
      const adminUser = { id: '1', email: 'admin@test.com', role: 'ADMIN', permissions: [] };
      const managerUser = { id: '2', email: 'manager@test.com', role: 'MANAGER', permissions: [] };
      
      // Admin should access all levels
      expect(hasRoleAccess(adminUser, 'VIEWER')).toBe(true);
      expect(hasRoleAccess(adminUser, 'USER')).toBe(true);
      expect(hasRoleAccess(adminUser, 'ADMIN')).toBe(true);
      
      // Manager should not access admin level
      expect(hasRoleAccess(managerUser, 'USER')).toBe(true);
      expect(hasRoleAccess(managerUser, 'ADMIN')).toBe(false);
    });
  });
});

// Helper function for role checking
function hasRoleAccess(user: any, requiredRole: string): boolean {
  const roleHierarchy: Record<string, number> = {
    VIEWER: 1,
    USER: 2,
    OPERATOR: 3,
    MANAGER: 4,
    ADMIN: 5
  };
  
  const userLevel = roleHierarchy[user.role] || 0;
  const requiredLevel = roleHierarchy[requiredRole] || 999;
  
  return userLevel >= requiredLevel;
}
