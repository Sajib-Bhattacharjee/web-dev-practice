/*Hay....What we are going to show this program?
The program will show that
1X 2X3X4X............X n= ?
So,Let Start.......*/
#include<stdio.h>
int main()
{
    int result=1,i,n;
    printf("Enter the last integer number: ");
    scanf("%d",&n);
    printf("1 X 2 X 3 X  4 X ........ X %d\n",n);
    for(i=1; i<=n ; i++ )
    {
        result= result* i;
    }
    printf("The result is: %d\n\a",result );
    getch();
}
