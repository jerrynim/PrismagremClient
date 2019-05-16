#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#define max 7

typedef struct node
{
    int data;
    struct node *link;
} Node;

Node *headnode[max], *ptr[max], *new_node;
int front = 0, rear = 0;
int visited[max] = {0};
int v = 0, e = 0, temp;
int row, col, i, j, start;
int mx[max][max];
int result[max], Queue[max], Stack[max], key[max];
int count = 0, top = 0;
int Q[max];

//result 저장
void memory_Result(int R)
{
    count++;
    result[count] = R;
}

//출력
int data_print(int key[])
{
    for (i = 0; i < max; i++)
        print("%2d", key[i]);
}

//큐 배열 초기화
void initialize(int Q[])
{
    for (i = 0; i < max; i++)
        Q[i] = 0;
}

//Q 삽입
void insertQ(int vt)
{
    rear++;
    Q[rear] = vt;
    Queue[rear] = vt;
    visited[vt] = 1;
    printf("\n  visited:");
    data_print(visited);
    printf("\n  Queue:");
    data_print(Queue);
}

//Q 삭제
void deleteQ()
{
    front++;
    Queue[front] = 0;
    temp = Q[front];
    printf("\n  Queue:");
    data_print(Queue);
    printf(" print: %5d", temp);
}

//bfs
void bfs(int select)
{
    initialize(Q);
    insertQ(select);
    while (rear > front)
    {
        deleteQ();
        memory_Result(temp);
        for (j = 0; j <= v; j++)
        {
            if ((visited[j] == 0) && (mx[temp][j] == 1))
                insertQ(j);
        }
        printf("\n");
    }
}

//dfs
void dfs(int select)
{
    visited[select] = 1;
    printf("\n  visited :");
    data_print(visited);
    top++;
    Stack[top] = select;
    pritnf("\n  Stack:");
    data_print(Stack);
    print(" print :%d", select);
    memory_Result(select);

    while (headnode[select] != NULL)
    {
        temp = headnode[select]->data;
        headnode[select] = headnode[select]->link;
        if (visited[temp] == 0)
        {
            dfs(temp);
            Stack[top] = 0;
            top--;
            printf("\n  Stack :");
            data_print(Stack);
        }
    }
}

void main()
{
    for (i = 0; i < max; i++)
        for (j = 0; j < max; j++)
            mx[i][j] = 0;
    initialize(Queue);
    initialize(Stack);

    printf("정점(Vertext)과 이음선(Edge)의 수를 입력하시오.");
    scanf_s("%d", &v);
    scanf_s("%d", &e);

    for (i = 0; i < e; i++)
    {
        printf("연결선 (row,col)을 입력하시오 ");
        scanf_s("%d", &row);
        scanf_s("%d", &col);
        mx[row][col] = 1;
        mx[col][row] = 1;
    }

    printf("\n--------\n인접행렬\n");
    for (i = 1; i < v; i++)
    {
        for (j = 1; j <= v; j++)
            printf("%d", mx[i][j]);
        printf("\n");
    }

    for (i = 1; i <= v; i++)
    {
        headnode[i] = NULL;
        ptr[i] = headnode[i];
    }

    //인접리스트 생성
    for (i = 1; i <= v; i++)
    {
        for (j = 1; j <= v; j++)
        {
            if (mx[i][j] == 1)
            {
                new_node = (Node *)malloc(sizeof(Node));
                new_node->data = j;
                new_node->link = NULL;
                if (headnode[i] == NULL)
                    headnode[i] = new_node;
                else
                    ptr[i]->link = new_node;

                ptr[i] = new_node;
            }
        }
    }

    //인접리스트 출력
    printf("\n ---------\n인접리스트\n");
    for (i = 1; i < v; i++)
    {
        ptr[i] = headnode[i];
        printf("[%d", i);

        while (ptr[i] != NULL)
        {
            printf("-> %d", ptr[i]->data);
            ptr[i] = ptr[i]->link;
        }
        printf("\n");
    }
    //BFS
    printf("\n-----------\nn너비 우선 탐색");
    printf("\n출발 정점을 선택하시오.");
    scanf_s("%d", &start);
    initialize(visited);
    printf("\n  visited:");
    data_print(visited);
    bfs(start);
    printf("\n결과:");
    for (i = 1; i <= v; i++)
        printf("%3d", result[i]);

    //DFS
    count = 0;
    printf("n---------\n깊이 우선 탐색");
    printf("\n출발 정점을 선택하시오.");
    scanf_s("%d", &start);
    initialize(visited);
    printf("\n  visited:");
    data_print(visited);
    dfs(start);
    printf("\n결과:");
    for (i = 1; i <= v; i++)
        printf("%3d", result[i]);

    printf("\n");
    system("pause");
}
