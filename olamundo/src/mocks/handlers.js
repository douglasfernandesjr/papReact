import { rest } from 'msw';

export const handlers = [
  rest.get('/pokemon/:id', (req, res, ctx) => {
    const { id } = req.params;

    return res(ctx.json({
      id: id,
      species: {
        name: `Pokemon${id}`
      },
      sprites: {
        other: {
          'official-artwork': {
            front_default: `img${id}.jpg`
          }
        }
      }
    }));
  })
];
