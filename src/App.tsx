import "./App.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
  const dbCreateStr = "TestEntities3 db = new TestEntities3();";
  const listOutputStr = ` public List<Users1> ListOutput()
  {
      return db.Users1.ToList();
  }`;
  const addUserStr = `public void AddUser(string name, string email, string password)
  {
      if(name != "" && email != "" &&  password != "")
      {
          var newUser = new Users1
          {
              name = name,
              email = email,
              password = password
          };
          db.Users1.Add(newUser);
      }
  }`;
  const saveDBChanhesStr = `public void UpdateDB()
  {
      db.SaveChanges();
      Info.ItemsSource = ListOutput();
  }`;
  const addNewDataStr = `private void TestButton_Click(object sender, RoutedEventArgs e)
  {
      AddUser(inputName.Text, inputEmail.Text, inputPassword.Text);
      UpdateDB();
  }`;

  return (
    <div className="container">
      <div>
        <h2>Создание экземпляра БД</h2>
        <SyntaxHighlighter language="csharp" style={oneLight}>
          {dbCreateStr}
        </SyntaxHighlighter>
      </div>
      <div>
        <h2>Метод ListOutput</h2>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {listOutputStr}
        </SyntaxHighlighter>
      </div>
      <div>
        <h2>Метод сохранения изменений в БД</h2>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {saveDBChanhesStr}
        </SyntaxHighlighter>
      </div>
      <div>
        <h2>Добаление данных</h2>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {addUserStr}
        </SyntaxHighlighter>
        <h4>XAML</h4>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {`<TextBox x:Name="inputName" HorizontalAlignment="Left" Margin="30,309,0,0" TextWrapping="Wrap" VerticalAlignment="Top" Width="120"/>
        <TextBox x:Name="inputEmail" HorizontalAlignment="Left" Margin="195,309,0,0" TextWrapping="Wrap" VerticalAlignment="Top" Width="120"/>
        <TextBox x:Name="inputPassword" HorizontalAlignment="Left" Margin="360,309,0,0" TextWrapping="Wrap" VerticalAlignment="Top" Width="120"/>`}
        </SyntaxHighlighter>
        <h3>Обработчик событий для кнопки</h3>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {addNewDataStr}
        </SyntaxHighlighter>
        <h4>XAML</h4>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {`<Button x:Name="TestButton" Content="Add User" HorizontalAlignment="Left" Margin="360,385,0,0" VerticalAlignment="Top" Click="TestButton_Click"/>`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default App;
