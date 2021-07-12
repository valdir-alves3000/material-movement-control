import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { Users } from './Users';

import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('products')
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

  @JoinColumn({ name: 'created_by_user' })
  @OneToOne(() => Users)
  createdByUser: Users[];

  @Exclude()
  @Column()
  updated_by_user: string;

  @JoinColumn({ name: 'updated_by_user' })
  @OneToOne(() => Users)
  updatedByUser: Users[];

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