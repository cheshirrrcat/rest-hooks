import { Resource } from 'rest-hooks';

export default class EmployeeResource extends Resource {
  id = undefined;
  first_name = '';
  last_name = '';
  email = '';
  avatar = '';

  pk() {
    return this.id?.toString();
  }
  
  static detailShape () {
    return {
      ...super.detailShape(),
      schema: { data: this.asSchema() },
    };
  }
  
  static listShape () {
    return {
      ...super.listShape(),
      schema: { data: [this.asSchema()] },
    };
  }
  
  static url(urlParams) {
    if (urlParams) {
      return `https://reqres.in/api/users/${urlParams.id}`;
    }
    return this.urlRoot;
  }
  
  static urlRoot = 'https://reqres.in/api/users';
}
