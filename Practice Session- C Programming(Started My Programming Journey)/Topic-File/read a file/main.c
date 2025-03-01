#include<stdio.h>
int main()
{
    FILE *file ;
    char ch;
    file =fopen("test.txt","r");
    if(file==NULL)
    {
        printf("The file does not exist ");
    }
    else
    {
        printf("The file is opened\n");
        while(!feof(file))
        {
            ch= fgetc(file);
            printf("%c",ch);
        }
        printf("The file is written successfully\n");
        fclose(file);
    }
}
