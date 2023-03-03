export interface User {
  id?: number,
  email: string,
  pwd?: string,
  avatarUrl?: string
}

/**
 * Can be used to precise required properties and types
 * for user credentials
 * for instance on login form (where pwd is required)
 */
export interface UserCredentials {
  email: string,
  pwd: string,
}
