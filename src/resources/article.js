import { Resource } from 'rest-hooks';

export default class ArticleResource extends Resource {
  id = undefined;
  employee_name = '';
  employee_salary = '';
  employee_age = '';
  profile_image = '';

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
  
  static urlRoot = 'http://dummy.restapiexample.com/api/v1/employees';
}
