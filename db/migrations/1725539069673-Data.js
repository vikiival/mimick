module.exports = class Data1725539069673 {
    name = 'Data1725539069673'

    async up(db) {
        await db.query(`ALTER TABLE "collection_entity" ADD "base_uri" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "collection_entity" DROP COLUMN "base_uri"`)
    }
}
