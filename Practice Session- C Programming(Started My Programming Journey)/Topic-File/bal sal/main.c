#include<stdio.h>
#include<conio.h>
int main()
{
    FILE *file;
    char name[100];
    int age;
    file =fopen("test.txt","w");

    if(file==NULL)
    {
        printf("The tile does not exist ");

    }
    else
    {
        printf("The file is opened\n");

        printf("Enter your full name: ");
        gets(name);

        printf("Enter your age: ");
        scanf("%d",&age);

        fprintf(file,"Name = %s\n, Age =%d\n",name,age);

         fclose(file);
    }

    getch();

}
