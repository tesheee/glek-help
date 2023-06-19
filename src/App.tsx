import "./App.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BsFillClipboard2Fill } from "react-icons/bs";

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
  const authMethodStr = `public void Auth(string username, string password)
  {
      try
      {
          currentUser = db.Users1.First(user => user.name == username && user.password == password);
          currentUserName.Content = currentUser.name;
      }
      catch (Exception)
      {
          Console.WriteLine("Error");
      }
  }`;
  const authButtonStr = `private void AuthButton_Click(object sender, RoutedEventArgs e)
  {
      Auth(authLoginInput.Text, authPasswordInput.Text);
  }`;
  const removeMethodStr = `private void Button_Click_1(object sender, RoutedEventArgs e)
  {
      db.Users1.Remove((Users1)Info.SelectedItem);
      UpdateDB();
  }`;
  const searchMethodStr = `private void Search_Click(object sender, RoutedEventArgs e)
  {
          var findUser = new List<Users1>();
          try
          {
              findUser.Add(db.Users1.First(user => user.name == SearchInput.Text));
          }
          catch (Exception)
          {
              Console.WriteLine("Error");
          }
          if (findUser.Count > 0)
          {
              Info.ItemsSource = findUser;
          }
          else
          {
              Info.ItemsSource = ListOutput();
          }
  }`;
  const styleExampleStr = `<Style x:Key="Search" TargetType="TextBox">
  <Setter Property="FontSize" Value="18" />
  <Setter Property="Width" Value="350" />
  <Setter Property="Height" Value="30" />
  <Setter Property="VerticalContentAlignment" Value="Center" />
  <Setter Property="HorizontalContentAlignment" Value="Left" />
  <Setter Property="Margin" Value="5" />
  <Setter Property="FontFamily" Value="Verdana" />
</Style>
<Style x:Key="SearchAndFilter" TargetType="ComboBox">
  <Setter Property="FontSize" Value="20" />
  <Setter Property="Width" Value="200" />
  <Setter Property="Height" Value="50" />
  <Setter Property="VerticalContentAlignment" Value="Center" />
  <Setter Property="HorizontalContentAlignment" Value="Left" />
  <Setter Property="Margin" Value="5" />
  <Setter Property="FontFamily" Value="Verdana" />
</Style>`;

  const frameExampleStr = `internal class FrameObject
{
    static public Frame frameObj = new Frame();
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
        <h4>XAML полей для ввода</h4>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {`<TextBox x:Name="inputName" 
          HorizontalAlignment="Left" 
          Margin="30,309,0,0" 
          TextWrapping="Wrap" 
          VerticalAlignment="Top" 
          Width="120"/>
<TextBox x:Name="inputEmail" 
          HorizontalAlignment="Left" 
          Margin="195,309,0,0" 
          TextWrapping="Wrap" 
          VerticalAlignment="Top" 
          Width="120"/>
<TextBox x:Name="inputPassword" 
          HorizontalAlignment="Left" 
          Margin="360,309,0,0" 
          TextWrapping="Wrap" 
          VerticalAlignment="Top" 
          Width="120"/>`}
        </SyntaxHighlighter>
        <h3>Обработчик событий для кнопки</h3>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {addNewDataStr}
        </SyntaxHighlighter>
        <h4>XAML кнопки</h4>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {`<Button x:Name="TestButton" 
          Content="Add User" 
          HorizontalAlignment="Left" 
          Margin="360,385,0,0" 
          VerticalAlignment="Top" 
          Click="TestButton_Click"/>`}
        </SyntaxHighlighter>
      </div>
      <div>
        <h2>Метод для входа юзера</h2>
        <h3>Статический экземпляр юзера</h3>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {`static Users1 currentUser = new Users1();`}
        </SyntaxHighlighter>
        <h3>Сам метод</h3>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {authMethodStr}
        </SyntaxHighlighter>
        <h4>XAML полей для ввода</h4>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {`<TextBox x:Name="authLoginInput" 
          HorizontalAlignment="Left" 
          Margin="30,349,0,0" 
          TextWrapping="Wrap" 
          VerticalAlignment="Top" 
          Width="120"/>
<TextBox x:Name="authPasswordInput" 
          HorizontalAlignment="Left" 
          Margin="195,349,0,0" 
          TextWrapping="Wrap" 
          VerticalAlignment="Top" 
          Width="120"/>`}
        </SyntaxHighlighter>
        <h4>XAML кнопки</h4>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {`<Button x:Name="AuthButton" 
          Content="Button" 
          HorizontalAlignment="Left" 
          Margin="275,385,0,0" 
          VerticalAlignment="Top" 
          Background="#FFE41B1B" 
          Click="AuthButton_Click"/>`}
        </SyntaxHighlighter>
        <h3>Обработчик событий кнопки</h3>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {authButtonStr}
        </SyntaxHighlighter>
      </div>
      <div>
        <h2>Удаление данных</h2>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {removeMethodStr}
        </SyntaxHighlighter>
      </div>
      <div>
        <h2>Поиск</h2>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {searchMethodStr}
        </SyntaxHighlighter>
        <h3>Или</h3>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {`newUsers = newUsers.FindAll(x => x.name.Contains(nameFilter.Text));`}
        </SyntaxHighlighter>
        <h3>Или</h3>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {`try
{
  Info.ItemsSource = db.Users1.Where(user => user.name == SearchInput.Text).ToList();
}
catch (Exception)
{
  Console.WriteLine("Error");
}`}
        </SyntaxHighlighter>
      </div>
      <h2>Доп. фичи</h2>
      <div>
        <h3>Заполнение комбо бокса</h3>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {`myComboBox.ItemsSource = ListOutput().Select(p => p.email).ToArray();`}
        </SyntaxHighlighter>
      </div>
      <div>
        <h3>Создание стиля</h3>
        <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
          {styleExampleStr}
        </SyntaxHighlighter>
      </div>
      <h4>Пример применения стиля</h4>
      <img src="https://sun9-34.userapi.com/impg/tb7t58gLDmT6sm3AkGxA3NMCDlozCa3LDaWNiQ/IvEPXgrXg-s.jpg?size=305x85&quality=96&sign=b6ebc26422319be689593cd803481402&type=album"></img>
      <h3>Создание фрейма (страницы)</h3>
      <h4>Пример применения фрейма</h4>
      <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
        {`<Frame x:Name="MainFrame" Grid.Row="1" NavigationUIVisibility="Hidden"/>`}
      </SyntaxHighlighter>
      <h4>Затем создаётся класс</h4>
      <img src="https://sun9-10.userapi.com/impg/LJM0ISh-ERZFYA4t4exFLzXv3haQTar369W5AA/C1gmKkAQ2tU.jpg?size=334x64&quality=96&sign=254fc20186f17b0c70af8660553429b0&type=album"></img>
      <h4>Код внутри класса</h4>
      <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
        {frameExampleStr}
      </SyntaxHighlighter>
      <h4>Применение фрейма</h4>
      <SyntaxHighlighter wrapLines={true} language="csharp" style={oneLight}>
        {`FrameObj.frameObj = MainFrame;`}
      </SyntaxHighlighter>
      <br></br>
    </div>
  );
}

export default App;
