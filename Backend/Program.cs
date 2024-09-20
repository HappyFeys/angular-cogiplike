var builder = WebApplication.CreateBuilder(args);

// Configurer CORS pour autoriser les requêtes de localhost:4200 (Angular)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin() 
                  .AllowAnyHeader()                   
                  .AllowAnyMethod();                  
        });
});

// Appel à la méthode pour ajouter les contrôleurs
ServiceManager.AddController(builder);

var app = builder.Build();

// Activer CORS
app.UseCors("AllowAll");

// Autres middlewares
ServiceManager.UseController(app);

app.Run();
