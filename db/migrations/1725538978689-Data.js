module.exports = class Data1725538978689 {
    name = 'Data1725538978689'

    async up(db) {
        await db.query(`ALTER TABLE "nft_entity" ADD "image" text`)
        await db.query(`ALTER TABLE "nft_entity" ADD "media" text`)
        await db.query(`ALTER TABLE "nft_entity" ADD "version" integer NOT NULL`)
        await db.query(`ALTER TABLE "collection_event" DROP COLUMN "interaction"`)
        await db.query(`ALTER TABLE "collection_event" ADD "interaction" character varying(6) NOT NULL`)
        await db.query(`ALTER TABLE "event" DROP COLUMN "interaction"`)
        await db.query(`ALTER TABLE "event" ADD "interaction" character varying(6) NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "nft_entity" DROP COLUMN "image"`)
        await db.query(`ALTER TABLE "nft_entity" DROP COLUMN "media"`)
        await db.query(`ALTER TABLE "nft_entity" DROP COLUMN "version"`)
        await db.query(`ALTER TABLE "collection_event" ADD "interaction" character varying(7) NOT NULL`)
        await db.query(`ALTER TABLE "collection_event" DROP COLUMN "interaction"`)
        await db.query(`ALTER TABLE "event" ADD "interaction" character varying(7) NOT NULL`)
        await db.query(`ALTER TABLE "event" DROP COLUMN "interaction"`)
    }
}
