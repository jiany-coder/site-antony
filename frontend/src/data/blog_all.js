// Tous les articles du blog : les plus récents en premier.
import { BLOG_POSTS as BASE_POSTS } from "./blog";
import { NEW_POSTS } from "./blog_new";

export const BLOG_POSTS = [...NEW_POSTS, ...BASE_POSTS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export const getPost = (slug) => BLOG_POSTS.find((p) => p.slug === slug);
