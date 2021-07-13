import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { Products } from './Products';

import {
  Entity,
  Column,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
} from 'typeorm';

@Entity('storage_points')
class StoragePoints {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  storage_point: string;

  @Column()
  locked: boolean;

  @Column()
  lock_description: string;

  @Column()
  product_id: string;

  @JoinColumn({ name: 'product_id' })
  @ManyToOne(() => Products)

  @JoinTable()
  productIdStorage: Products[];

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

export { StoragePoints };