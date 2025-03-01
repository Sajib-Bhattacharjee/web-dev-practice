#include<stdio.h>

int main()
{
    FILE *file ;
    file = fopen("test.txt","a");

    char name[100];
    int age;

    if(file==NULL)
    {
        printf("The file does not exist");
    }

    else

    {
        printf("The file is opened\n");
        printf("\n\nEnter your full name: ");
        gets(name);
        printf("\nEnter your age: ");
        scanf("%d",&age);

        fprintf(file,"Name= %s\n Age=%d\n",name,age);

        printf("\nThe file is written successfully");

        fclose(file);
    }


    getch();

}
