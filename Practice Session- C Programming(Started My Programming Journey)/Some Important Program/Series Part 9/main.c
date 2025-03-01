//The program will show that the fibonacci series;

#include<stdio.h>
int main()
{
    while(1)
    {
        int n,count=0,first=0,second=1,fibo;
        printf("\n\tEnter the n: ");
        scanf("%d",&n);

        while(count<n)
        {
            if(count<=1)
            {
                fibo=count;
            }
            else
            {
                fibo=first + second;
                first= second;
                second= fibo;
            }
            printf("   %d",fibo);
            count++;
        }
        printf("  \nJust wow !!!");
        getch();
    }

}
