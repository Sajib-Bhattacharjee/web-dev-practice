/* Now I will do that program that will show (odd-even)
such as: 1-2+3-4+5-6+7................ (here no sing assign)n...
So,Let us Start....*/

#include<stdio.h>
int main()
{
    int n,even=0,odd=0,i;
    printf("Enter the n: ");
    scanf("%d",&n);

    for(i=1; i<=n; i++)
    {
        if(i%2 == 0)
            even=even+ i;
        else
            odd = odd+ i;

    }
    printf("The sum is : %d\n\a\t",odd-even);
    getch();
}
