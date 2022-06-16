import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createTableUsers1654897936960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: '(uuid())',
          },
          {
            name: 'role_id',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'situation',
            type: 'varchar',
            default: '"active"',
          },
          {
            name: 'created_by',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'updated_by',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'datetime',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'datetime',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'datetime',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'user_roles_fk',
        columnNames: ['role_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'roles',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'user_users_created_by_fk',
        columnNames: ['created_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'user_users_updated_by_fk',
        columnNames: ['updated_by'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'user_roles_fk');
    await queryRunner.dropForeignKey('users', 'user_users_created_by_fk');
    await queryRunner.dropForeignKey('users', 'user_users_updated_by_fk');
    await queryRunner.dropTable('users');
  }
}
