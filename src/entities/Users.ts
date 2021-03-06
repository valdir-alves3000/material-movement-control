import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
class Users {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  admin: boolean;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Users };
