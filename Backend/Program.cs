var builder = WebApplication.CreateBuilder(args);

// Configurer CORS pour autoriser les requêtes de localhost:4200 (Angular)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularOrigin",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200") // Origine autorisée
                  .AllowAnyHeader()                    // Autoriser tous les en-têtes
                  .AllowAnyMethod();                   // Autoriser toutes les méthodes HTTP (GET, POST, etc.)
        });
});

// Appel à la méthode pour ajouter les contrôleurs
ServiceManager.AddController(builder);

var app = builder.Build();

// Activer CORS
app.UseCors("AllowAngularOrigin");

// Autres middlewares
ServiceManager.UseController(app);

app.Run();
