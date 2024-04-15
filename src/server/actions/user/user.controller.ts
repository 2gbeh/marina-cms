import { Repository, AppDataSource } from "../../data-source";
import { CreateUserDto, ReadUserDto, UpdateUserDto } from "./user.dto";
import { Users as User } from "./user.entity";

export class UserController {
  private repository: Repository<User>;
  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }
  // constructor(
  //   private repository: Repository<User> = AppDataSource.getRepository(User)
  // ) {}

  // QUERIES
  async read(query?: number | ReadUserDto) {
    switch (typeof query) {
      case "number":
        return await this.repository.findOneBy({ id: query });
      case "object":
        return await this.repository.findBy(query);
      default:
        return await this.repository.find();
    }
  }

  // MUTATIONS
  async create(body: CreateUserDto) {
    const obj = new User();
    obj.name = body.name;
    obj.email = body.email;
    obj.password = body.password;
    return await this.repository.save(obj);
  }

  async update(body: UpdateUserDto, id: number) {
    const obj = await this.repository.findOneByOrFail({ id });
    // Object.entries(body).map(([k, v]) => (obj[k] = v));
    if (body?.name) obj.name = body.name;
    if (body?.password) obj.password = body.password;
    return await this.repository.save(obj);
  }

  async delete(id: number) {
    const obj = await this.repository.findOneByOrFail({ id });
    return await this.repository.remove(obj);
  }
}
