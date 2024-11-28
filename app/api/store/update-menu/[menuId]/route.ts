
export const dummySingleMenuInfo = {
  menuId: 123,
  menuImage:
    'https://cdn.discordapp.com/attachments/1084831811051454477/1309900825627201616/output_3280796331.jpg?ex=67453df5&is=6743ec75&hm=dc387cae961c61f7537c5e8842b785f026e09ebb5939dbc3ff6d4f2d69a3f00c&',
  menuName: '코코 샐러드',
  menuGroupName: '샐러드',
  price: 9500,
  stockAvailable: true,
  menuStock: 10,
  isSoldOut: true,
}

export async function GET() {
  return Response.json(dummySingleMenuInfo);
}