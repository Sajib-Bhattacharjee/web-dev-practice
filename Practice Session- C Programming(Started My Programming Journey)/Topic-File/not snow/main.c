#include<stdio.h>
int  main()
{
    FILE *file ;
    char name[100];
    int age;
    file =fopen("test.txt","w");

    if(file== NULL)
    {
        printf("The file does not exist ");
    }
    else
    {
        printf("The file is opened\n");
        printf("\n\nEnter your ful name: ");
        gets(name);
        printf("Enter your age : ");
        scanf("%d",&age);

        fprintf(file,"Name = %s\n,Age=%d\n" ,name,age);
        printf("The file is written successfully\n");
        fclose(file);
    }

    getch();
}
