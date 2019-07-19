const query={ }
function controller(query)
{
  const pages=query.page||9
  const perPage=query.perPage||10
  console.log(pages)
  console.log(perPage)

}
controller(query)