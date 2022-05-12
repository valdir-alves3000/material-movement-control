import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Users } from "./Users";

@Entity("products")
class Products {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  material: string;

  @Column()
  storage_location: string;

  @Column({ length: 100 })
  status: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  locked: boolean;

  @Exclude()
  @Column()
  created_by_user: string;

  @JoinColumn({ name: "created_by_user" })
  @OneToOne(() => Users)
  createdByUser: Users[];

  @Exclude()
  @Column()
  updated_by_user: string;

  @JoinColumn({ name: "updated_by_user" })
  @OneToOne(() => Users)
  updatedByUser: Users[];

  @CreateDateColumn()
  expiration_date: Date;

  @CreateDateColumn()
  expiry_date_after_opening: string;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Products };
