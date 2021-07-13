import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStoragePoints1626209917959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'storage_points',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'storage_point',
                        type: 'varchar'
                    },
                    {
                        name: 'locked',
                        type: 'boolean'
                    },
                    {
                        name: 'lock_description',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'product_id',
                        type: 'uuid'
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
                    },

                ],
                foreignKeys: [
                    {
                        name: 'FKStoragePointProduct',
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
        await queryRunner.dropTable('storage_points');
    }

}
