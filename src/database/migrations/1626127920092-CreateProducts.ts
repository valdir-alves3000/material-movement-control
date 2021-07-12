import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1626127920092 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'storage_location',
                        type: 'varchar'
                    },                
                    {
                        name:'status',
                        type: 'varchar'
                    },
                    {
                     name: 'material',
                     type: 'varchar',                    
                    },
                    {
                        name: 'description',
                        type: 'text'
                    },
                    {
                       name: 'quantity',
                       type: 'integer' 
                    },
                    {
                      name: 'locked',
                      type: 'boolean'  
                    },
                    {
                      name: 'created_by_user',
                      type: 'uuid' 
                    },
                    {
                      name: 'updated_by_user',
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
                        name: "FKCreatedByUserProduct",
                        referencedTableName:  'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['created_by_user'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    },
                    {
                        name: "FKUpdatedByUserProduct",
                        referencedTableName:  'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['updated_by_user'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    },
                ]
            })
        )
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
        }    
    }
    