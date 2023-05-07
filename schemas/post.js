export default {
    name: 'post',
    title: 'Миний постууд',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Гарчиг',
        type: 'string',
        validation: Rule => [
          Rule.required().min(10).error('Гарчиг хамгийн багадаа 10 тэмдэгтээс дээш байх'),
          Rule.max(50).warning('Гарчиг богинохон байх хэрэгтэй (80 тэмлэгтээс хэтрэхгүй байх)')
        ]
      },
      {
        name: 'subtitle',
        title: 'Дэд гарчиг',
        type: 'string',
        description: 'Постийн төрлийг текстээр бичих'
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Зургийн текст',
                description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                options: { 
                  isHighlighted: true
                }
              },
              {
                type: 'string',
                name: 'position',
                title: 'Зургийн байрлал',
                options: { 
                  isHighlighted: true,
                  list: [
                    {title: "Голлуул", value: "center"},
                    {title: "Баруун", value: "right"},
                    {title: "Зүүн", value: "left"},
                  ],
                  layout: "radio",
                }
              }
            ]
          },
        ]
      },
      {
        name: 'image',
        title: 'Зураг',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            type: 'text',
            name: 'alt',
            title: 'Зургийн тайлбар',
            description: `Some of your visitors cannot see images, 
              be they blind, color-blind, low-sighted; 
              alternative text is of great help for those 
              people that can rely on it to have a good idea of 
              what\'s on your page.`,
            options: {
              isHighlighted: true
            }
          }
        ]
      },
      {
        name: 'date',
        title: 'Огноо',
        type: 'datetime',
      },
      {
        name: 'slug',
        title: 'Линк',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          }
      },
    ]
  }