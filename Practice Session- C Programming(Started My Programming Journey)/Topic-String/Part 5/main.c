//String addition with strcat library function.....
#include<stdio.h>
int main()
{
  char str1[ ]="The name of our ";
  strcat(str1, "country is Bangladesh");
  printf("The addition is: %s\n",&str1);
  getch();
}
