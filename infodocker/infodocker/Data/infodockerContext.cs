using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace infodocker.Models
{
    public class infodockerContext : DbContext
    {
        public infodockerContext (DbContextOptions<infodockerContext> options)
            : base(options)
        {
        }

        public DbSet<infodocker.Models.Example> Example { get; set; }
    }
}
