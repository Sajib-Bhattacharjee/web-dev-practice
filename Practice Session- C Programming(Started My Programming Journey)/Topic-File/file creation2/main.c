#include<stdio.h>
int main()
{
    FILE *file;
    file=fopen("test.txt","a");
    char name[1000];
    int i,age ,phone;
    int num;
    if(file==NULL)
    {
        printf("The file does not exist ");
    }
    else
    {
        printf("\nThe file is opened");
        printf("\n\nHow many student you want to know: ");
        scanf("%d",&num);

      for(i=0; i<=num; i++)
      {
        printf("\nEnter your full name: ");
        fflush(stdin);
        gets(name);
        printf("\nEnter your age: ");
        scanf("%d",&age);

        printf("\nEnter mobile number: ");
        scanf("%d",&phone);

        fprintf(file,"\n%s\t\t %d \t %d",name,age,phone);


      }


    printf("The file is created by ...");
    printf("-S.Bc.....");

        fclose(file);
    }
    getch();

}
