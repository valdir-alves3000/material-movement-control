import { v4 as uuid } from 'uuid';
import { Products } from './Products';

import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('supply_points')
class SupplyPoints {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  supply_point: string;

  @Column()
  product_id: string;

  @JoinColumn({ name: 'product_id' })
  @ManyToOne(() => Products)
  productIdSupplyPoint: Products[];

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

export { SupplyPoints };
