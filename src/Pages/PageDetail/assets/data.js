const data = {
  text: `
<h1>Заголовок 1</h1>
      <h2>Заголовок 2</h2>
      <h3>Заголовок 3</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <ul>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
      </ul>
      <ol>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
      </ol>
      <img src='/logo512.png' alt='asasaasds' />
      <table>
        <tr>
          <th>№ п/п</th>
          <th>Наименование товара</th>
           <th>Ед. изм.</th>
           <th>Количество</th>
           <th>Цена за ед. изм., руб.</th>
           <th>Стоимость, руб.</th>
        </tr>
        <tr>
          <td>1.</td>
          <td>Томаты свежие</td><td>кг</td><td>15,20</td><td>69,00</td><td>1048,80</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Огурцы свежие</td><td>кг</td><td>2,50</td><td>48,00</td><td>120,00</td>
        </tr>
        <tr>
          <td colspan="5" style="text-align:right">ИТОГО:</td><td>1168,80</td><!-- Задаем количество ячеек по горизонтали для объединения-->
        </tr>
      </table>
`,
  title: 'Первая новость',
  date: '18.06.2020',
  image: `
<img src='/logo512.png' alt='asasdasd' />
<img src='/logo192.png' alt='asasdasd' />
`
}
export default data