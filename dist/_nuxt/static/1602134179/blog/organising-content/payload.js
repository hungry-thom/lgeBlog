__NUXT_JSONP__("/blog/organising-content", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return {data:[{post:{slug:f,id:b,uuid:g,title:h,html:i,comment_id:b,feature_image:j,featured:c,visibility:k,send_email_when_published:c,created_at:d,updated_at:d,published_at:l,custom_excerpt:e,codeinjection_head:a,codeinjection_foot:a,custom_template:a,canonical_url:a,url:m,excerpt:e,reading_time:n,access:o,og_image:a,og_title:a,og_description:a,twitter_image:a,twitter_title:a,twitter_description:a,meta_title:a,meta_description:a,email_subject:a}},{post:{slug:f,id:b,uuid:g,title:h,html:i,comment_id:b,feature_image:j,featured:c,visibility:k,send_email_when_published:c,created_at:d,updated_at:d,published_at:l,custom_excerpt:e,codeinjection_head:a,codeinjection_foot:a,custom_template:a,canonical_url:a,url:m,excerpt:e,reading_time:n,access:o,og_image:a,og_title:a,og_description:a,twitter_image:a,twitter_title:a,twitter_description:a,meta_title:a,meta_description:a,email_subject:a}}],fetch:[],mutations:void 0}}(null,"5f7d498529d68b3183e0b428",false,"2020-10-07T04:52:21.000+00:00","Ghost has a flexible organisational taxonomy called tags and the ability to create custom site structures using dynamic routes.","organising-content","97492d16-1629-4dd9-99e9-229aec3e5bed","Organising your content","\u003Ch2 id=\"sensible-tagging\"\u003ESensible tagging\u003C\u002Fh2\u003E\u003Cp\u003EYou can think of tags like Gmail labels. By tagging posts with one or more keyword, you can organise articles into buckets of related content.\u003C\u002Fp\u003E\u003Cp\u003EWhen you create content for your publication you can assign tags to help differentiate between categories of content. \u003C\u002Fp\u003E\u003Cp\u003EFor example you may tag some content with News and other content with Podcast, which would create two distinct categories of content listed on \u003Ccode\u003E\u002Ftag\u002Fnews\u002F\u003C\u002Fcode\u003E and \u003Ccode\u003E\u002Ftag\u002Fpodcast\u002F\u003C\u002Fcode\u003E, respectively.\u003C\u002Fp\u003E\u003Cp\u003EIf you tag a post with both \u003Ccode\u003ENews\u003C\u002Fcode\u003E \u003Cem\u003Eand\u003C\u002Fem\u003E \u003Ccode\u003EPodcast\u003C\u002Fcode\u003E - then it appears in both sections. Tag archives are like dedicated home-pages for each category of content that you have. They have their own pages, their own RSS feeds, and can support their own cover images and meta data.\u003C\u002Fp\u003E\u003Ch3 id=\"the-primary-tag\"\u003EThe primary tag\u003C\u002Fh3\u003E\u003Cp\u003EInside the Ghost editor, you can drag and drop tags into a specific order. The first tag in the list is always given the most importance, and some themes will only display the primary tag (the first tag in the list) by default. \u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cem\u003E\u003Cstrong\u003ENews\u003C\u002Fstrong\u003E, Technology, Startup\u003C\u002Fem\u003E\u003C\u002Fblockquote\u003E\u003Cp\u003ESo you can add the most important tag which you want to show up in your theme, but also add related tags which are less important.\u003C\u002Fp\u003E\u003Ch3 id=\"private-tags\"\u003EPrivate tags\u003C\u002Fh3\u003E\u003Cp\u003ESometimes you may want to assign a post a specific tag, but you don't necessarily want that tag appearing in the theme or creating an archive page. In Ghost, hashtags are private and can be used for special styling.\u003C\u002Fp\u003E\u003Cp\u003EFor example, if you sometimes publish posts with video content - you might want your theme to adapt and get rid of the sidebar for these posts, to give more space for an embedded video to fill the screen. In this case, you could use private tags to tell your theme what to do.\u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cem\u003E\u003Cstrong\u003ENews\u003C\u002Fstrong\u003E, #video\u003C\u002Fem\u003E\u003C\u002Fblockquote\u003E\u003Cp\u003EHere, the theme would assign the post publicly displayed tags of News - but it would also keep a private record of the post being tagged with #video. In your theme, you could then look for private tags conditionally and give them special formatting. \u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cem\u003EYou can find documentation for theme development techniques like this and many more over on Ghost's extensive \u003Ca href=\"https:\u002F\u002Fghost.org\u002Fdocs\u002Fapi\u002Fhandlebars-themes\u002F\"\u003Etheme docs\u003C\u002Fa\u003E.\u003C\u002Fem\u003E\u003C\u002Fblockquote\u003E\u003Ch2 id=\"dynamic-routing\"\u003EDynamic routing\u003C\u002Fh2\u003E\u003Cp\u003EDynamic routing gives you the ultimate freedom to build a custom publication to suit your needs. Routes are rules that map URL patterns to your content and templates. \u003C\u002Fp\u003E\u003Cp\u003EYou may not want content tagged with \u003Ccode\u003ENews\u003C\u002Fcode\u003E to exist on: \u003Ccode\u003Eexample.com\u002Ftag\u002Fnews\u003C\u002Fcode\u003E. Instead, you want it to exist on \u003Ccode\u003Eexample.com\u002Fnews\u003C\u002Fcode\u003E .\u003C\u002Fp\u003E\u003Cp\u003EIn this case you can use dynamic routes to create customised collections of content on your site. It's also possible to use multiple templates in your theme to render each content type differently.\u003C\u002Fp\u003E\u003Cp\u003EThere are lots of use cases for dynamic routing with Ghost, here are a few common examples: \u003C\u002Fp\u003E\u003Cul\u003E\u003Cli\u003ESetting a custom home page with its own template\u003C\u002Fli\u003E\u003Cli\u003EHaving separate content hubs for blog and podcast, that render differently, and have custom RSS feeds to support two types of content\u003C\u002Fli\u003E\u003Cli\u003ECreating a founders column as a unique view, by filtering content created by specific authors\u003C\u002Fli\u003E\u003Cli\u003EIncluding dates in permalinks for your posts\u003C\u002Fli\u003E\u003Cli\u003ESetting posts to have a URL relative to their primary tag like \u003Ccode\u003Eexample.com\u002Feurope\u002Fstory-title\u002F\u003C\u002Fcode\u003E\u003Cbr\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cblockquote\u003E\u003Cem\u003EDynamic routing can be configured in Ghost using \u003Ca href=\"http:\u002F\u002Fyaml.org\u002Fspec\u002F1.2\u002Fspec.html\" rel=\"noreferrer nofollow noopener\"\u003EYAML\u003C\u002Fa\u003E files. Read our dynamic routing \u003Ca href=\"https:\u002F\u002Fghost.org\u002Fdocs\u002Fapi\u002Fhandlebars-themes\u002Frouting\u002F\"\u003Edocumentation\u003C\u002Fa\u003E for further details.\u003C\u002Fem\u003E\u003C\u002Fblockquote\u003E\u003Ch2 id=\"next-apps-integrations\"\u003ENext: Apps &amp; Integrations\u003C\u002Fh2\u003E\u003Cp\u003EWork with all your favourite apps and tools using our \u003Ca href=\"http:\u002F\u002Flocalhost:2368\u002Fapps-integrations\u002F\"\u003Eintegrations\u003C\u002Fa\u003E, or create your own custom integrations with webhooks.\u003C\u002Fp\u003E","https:\u002F\u002Fstatic.ghost.org\u002Fv3.0.0\u002Fimages\u002Forganising-your-content.png","public","2020-10-07T04:52:23.000+00:00","http:\u002F\u002Flocalhost:2368\u002Forganising-content\u002F",2,true)));