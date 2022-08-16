export type TRepositoryContents = IContent[];

export interface IContent {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: Links;
}

export interface Links {
  self: string;
  git: string;
  html: string;
}

export async function getRepositoryContent(): Promise<TRepositoryContents> {
  const url = `https://api.github.com/repos/mnishihan/laravel-docs-in-pdf/contents`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!response.ok) return [];

  return response.json();
}
