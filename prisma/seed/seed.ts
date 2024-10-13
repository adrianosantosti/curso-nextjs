import { PrismaClient } from '@prisma/client';
import articles from "../../src/data/articles.json";
import games from '../../src/data/games.json';
import { slugify } from '../../src/helpers/slugify';

const prisma = new PrismaClient();

async function main() {
    //console.log("Iniciando seed");
    const [,,...args] = process.argv;

    const isDev = process.env.NODE_ENV == 'development';
    console.log('seed and anticles');
    //return;

    if (!isDev)
    {
        throw new Error('NODE_ENV is not a development environment');
    }

    const isTruncate = !!args.find((arg) => arg === '-truncate');
    const isArticles = !!args.find((arg) => arg === 'articles');
    const isGames = !!args.find((arg) => arg === 'games');

    if (isTruncate)
    {
        if (isArticles)
            await truncateArticles();

        if (isGames)
            await truncateGamesAndGenres()
    }

    if (isArticles)
         await seedArticles();

    if (isGames)
        await seedGamesAndGenres();
}

async function seedArticles()
{
    for (const article of articles){
        const record = await prisma.article.create({
            data: {
                title: article.title,
                slug: slugify(article.title),
                excerpt: article.excerpt,
                content: article.content,
                image: article.image,
                publishedAt: new Date(article.publish_date)
            }
        });

        console.log('*** created article', record.id, record.title);
    }
}

async function seedGamesAndGenres() {
    console.log('seeding games and genres');

    for (const game of games) {

        const genres = game.genre.map((title) => {
            const slug = slugify(title);
            return {
                genre: {
                    connectOrCreate: {
                        where: {slug: slug},
                        create: {
                            title: title,
                            slug: slug
                        }
                    },
                }
            };
        });
        
        const record = await prisma.games.create({
            data: {
                title: game.title,
                slug: game.slug,
                year: game.year,
                image: game.fileName,
                link: game.link || "#",
                platform: 'Nintendo 64',
                genres: {
                    create: genres
                }
            }
        });

        console.log("*** created game", record.id, record.title);
    }
}

async function truncateArticles(){
    // delete all records
    // truncate
    await prisma.article.deleteMany();
    const isTruncateArticles = await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "Article");
    console.log("truncate articles", isTruncateArticles);
}

async function truncateGamesAndGenres() {
    //console.log("truncate games and genres");

    // delete all records
    // truncate
    await prisma.gameGenre.deleteMany();
    await prisma.games.deleteMany();
    await prisma.genres.deleteMany();
    
    const isTruncateGameGenre = await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "GameGenre");
    const isTruncateGenres = await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "Genres");
    const isTruncateGames =await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "Games");

    console.log("Truncate gameGenre", isTruncateGameGenre);
    console.log("Truncate Genres", isTruncateGenres);
    console.log("Truncate Games", isTruncateGames);
}

// main().then(async() => {

//     await prisma.$disconnect();

// }).catch(async(e) => {
//     console.log(e);
//     await prisma.$disconnect();
//     process.exit(1);
// });

export const truncate = async () => {
    console.log('Truncate Article');
    await truncateArticles();

    console.log('Truncate Games and Genres');
    await truncateGamesAndGenres();
}


export const seed = async () => {
    console.log('Seeding Articles');
    await seedArticles();

    console.log('Seeding Games');
    await seedGamesAndGenres();
}