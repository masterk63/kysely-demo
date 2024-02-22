import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable("person").addColumn("metadata", "json").execute();
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.alterTable("person").dropColumn("metadata").execute();
}
