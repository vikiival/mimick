module.exports = class Data1725539577240 {
    name = 'Data1725539577240'

    async up(db) {
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "burned"`)
        await db.query(`ALTER TABLE "collection_entity" ADD "distribution" integer NOT NULL`)
        await db.query(`ALTER TABLE "collection_entity" ADD "floor" numeric NOT NULL`)
        await db.query(`ALTER TABLE "collection_entity" ADD "hash" text NOT NULL`)
        await db.query(`ALTER TABLE "collection_entity" ADD "highest_sale" numeric NOT NULL`)
        await db.query(`ALTER TABLE "collection_entity" ADD "image" text`)
        await db.query(`ALTER TABLE "collection_entity" ADD "max" integer`)
        await db.query(`ALTER TABLE "collection_entity" ADD "media" text`)
        await db.query(`ALTER TABLE "collection_entity" ADD "owner_count" integer NOT NULL`)
        await db.query(`ALTER TABLE "collection_entity" ADD "symbol" text`)
        await db.query(`ALTER TABLE "collection_entity" ADD "type" character varying(7) NOT NULL`)
        await db.query(`ALTER TABLE "collection_entity" ADD "version" integer NOT NULL`)
        await db.query(`ALTER TABLE "collection_entity" ADD "volume" numeric NOT NULL`)
        await db.query(`CREATE UNIQUE INDEX "IDX_90561baea428b17fdaf8e484d7" ON "collection_entity" ("hash") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "collection_entity" ADD "burned" boolean NOT NULL`)
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "distribution"`)
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "floor"`)
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "hash"`)
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "highest_sale"`)
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "image"`)
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "max"`)
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "media"`)
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "owner_count"`)
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "symbol"`)
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "type"`)
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "version"`)
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "volume"`)
        await db.query(`DROP INDEX "public"."IDX_90561baea428b17fdaf8e484d7"`)
    }
}
