import { Cookie } from '@builder.io/qwik-city';
import { renderToStream, RenderToStreamOptions } from '@builder.io/qwik/server';
import { CookieKeyEnum } from '@org-two/utils';
import { manifest } from '@qwik-client-manifest';
import Root from './root';

export default function (opts: RenderToStreamOptions) {
  const cookies: Cookie = opts?.serverData?.qwikcity?.ev?.cookie;

  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: opts.serverData?.locale,
      'data-theme': cookies?.get(CookieKeyEnum.THEME)?.value ?? '',
      ...opts.containerAttributes,
    },
  });
}
