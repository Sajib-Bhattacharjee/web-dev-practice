#include<stdio.h>
int main()
{
    FILE *file;
    char name[10000];
   printf("Write as  your wish: ");
   gets(name);
   int length=strlen(name);
   int i;

    file=fopen("test.txt","w");

    if(file==NULL)
    {
        printf("The file does not exist");

    }
    else
   {
          printf("The file is opened\n");
          for(i=0; i<length; i++)
          {
              fputc(name[i],file);
          }
          printf("The file is written successfully\N");

          fclose(file);

   }


    getch();
}
