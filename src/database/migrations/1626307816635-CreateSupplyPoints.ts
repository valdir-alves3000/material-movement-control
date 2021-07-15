import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSupplyPoints1626307816635 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table ({
            name: 'supply_points',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'supply_point',
                    type: 'varchar'
                },
                {
                    name: 'product_id',
                    type: 'uuid',
                    isNullable: true
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ],
            foreignKeys: [
                {
                    name: 'FKSupplyPointProduct',
                        referencedTableName: 'products',
                        referencedColumnNames: ['id'],
                        columnNames: ['product_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                        
                },
            ]
        })
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('supply_points')
    }

}
