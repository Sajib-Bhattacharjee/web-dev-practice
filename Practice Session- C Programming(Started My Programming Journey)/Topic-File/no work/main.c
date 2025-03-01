#include<stdio.h>
int  main()
{
    FILE *file ;
    file =fopen("test.txt","w");

    if(file== NULL)
    {
        printf("The file does not exist ");
    }
    else
    {
        printf("The file is opened\n");
        printf("The file is written successfully\n");

        fclose(file);
    }

    getch();
}
