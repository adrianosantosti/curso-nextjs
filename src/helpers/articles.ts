export const getArticleUrl = (slug: string) => {
    return `/article/${slug}`;
}

export const getArticleImage = (fileName: string) => {
    return `/assets/images/articles/${fileName}`;
}