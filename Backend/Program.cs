Console.WriteLine("Serveur fait vite fait = code pas propre");

var builder = WebApplication.CreateBuilder(args);

ServiceManager.AddController(builder);

var app = builder.Build();

ServiceManager.UseController(app);

app.Run();
