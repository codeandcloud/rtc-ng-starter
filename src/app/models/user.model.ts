export interface User {
  firstName: string;
  lastName: string;
  roles: string[];
  token: string;
}

export class SiteUser implements User {
  public firstName = '';
  public lastName = '';
  public roles: string[] = [];
  public token = '';
  constructor(
    firstName: string,
    lastName: string,
    roles: string[],
    token = ''
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.roles = roles;
    this.token = token;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
