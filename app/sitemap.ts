import type { MetadataRoute } from 'next';

export default function sitemap():MetadataRoute.Sitemap{
  const routes=['','about','services','strength-training','personal-coaching','group-classes','gallery','pricing','testimonials','blog','blog/train-smarter','blog/recovery-guide','blog/build-consistency','faq','contact','privacy','terms'];
  return routes.map(route=>({url:`https://citigym.pk/${route}`,lastModified:new Date(),changeFrequency:route.startsWith('blog')?'weekly':'monthly',priority:route===''?1:.8}));
}
