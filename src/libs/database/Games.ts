import { Games, PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
const MAX_RECORDS = 50;
const MIN_OFFSET = 0;

const GamesDataBase = {
    getOne: async ({ where }: { where: Pick<Games, "id"> | Pick<Games, "slug"> }) => {
        const record = prisma.games.findUnique({where});
        return record;
    },

    get: async ({ where = {}, orderBy = {}, limit = 10, offset = 0 }) =>{

        const take = Math.min(limit, MAX_RECORDS);
        const skip = Math.max(offset, MIN_OFFSET);

        const records = await prisma.games.findMany({
            where: where,
            orderBy: orderBy,
            take: take,
            skip: skip
        });

        return records;
    },
    
    count: async ({ where = {}}) =>{

        const count = await prisma.games.count({
            where: where,
        });
        return count;
    }
};

export default GamesDataBase;