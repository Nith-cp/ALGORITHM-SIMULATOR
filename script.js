
const algorithms = [
    { 
        id: 120, 
        name: "Two Pointers", 
        category: "math", 
        desc: "Dùng hai con trỏ (Trái và Phải) di chuyển ngược chiều nhau trên mảng ĐÃ SẮP XẾP để tìm nhanh cặp phần tử có tổng bằng Target.",
        time: "O(N)", 
        space: "O(1)",
        code: `int left = 0, right = n - 1;\nwhile (left < right) {\n    int sum = arr[left] + arr[right];\n    if (sum == target) return true;\n    if (sum < target) left++;\n    else right--;\n}`,
        legend: [
            { color: "#0984e3", label: "Con trỏ Left (L)" },
            { color: "#e17055", label: "Con trỏ Right (R)" },
            { color: "#00b894", label: "Đã tìm thấy" }
        ]
    },
    { 
        id: 110, 
        name: "Trie (Prefix Tree)", 
        category: "data", 
        desc: "Cấu trúc dữ liệu dạng cây chuyên dụng để lưu trữ và tìm kiếm các chuỗi (tiền tố). Các từ có chung tiền tố sẽ dùng chung nhánh với nhau.",
        time: "O(L) với L là độ dài từ", 
        space: "O(N * L)",
        code: `void insert(string word) {\n    Node* curr = root;\n    for(char c : word) {\n        if(curr->child[c] == NULL)\n            curr->child[c] = new Node();\n        curr = curr->child[c];\n    }\n    curr->isEnd = true;\n}`,
        legend: [
            { color: "#0984e3", label: "Đang duyệt" },
            { color: "#e17055", label: "Tạo Node mới" },
            { color: "#00b894", label: "Kết thúc từ (Viền xanh)" }
        ]
    },
    { 
        id: 40, 
        name: "Depth First Search (DFS)", 
        category: "graph", 
        desc: "Duyệt đồ thị theo chiều sâu (DFS): Đi sâu vào từng nhánh con cho đến khi không đi được nữa thì quay lui (Backtrack).",
        time: "O(V + E)", 
        space: "O(V)",
        code: `void DFS(int u) {
    visited[u] = true;
    cout << u << " ";
    for (int v : adj[u]) {
        if (!visited[v]) {
            DFS(v);
        }
    }
}`,
        legend: [
            { color: "#e67e22", label: "Đang xét (Current)" },
            { color: "#2ecc71", label: "Đã duyệt xong" },
            { color: "#95a5a6", label: "Chưa thăm" }
        ]
    },
    { 
        id: 41, 
        name: "Breadth First Search (BFS)", 
        category: "graph", 
        desc: "Tìm kiếm theo chiều rộng: Duyệt các node theo từng lớp (layer-by-layer). Dùng hàng đợi (Queue).",
        time: "O(V + E)", 
        space: "O(V)",
        code: `void BFS(int s) {   
            queue<int> q;
            q.push(s);
            visited[s] = true;
            while(!q.empty()) {
                int u = q.front(); q.pop();
                for(int v : adj[u]) {
                    if(!visited[v]) {
                        visited[v] = true;
                        q.push(v);
                    }
                }
            }
        }`,
        legend: [
            { color: "#0984e3", label: "Đang xét (Current)" },
            { color: "#e17055", label: "Trong hàng đợi (Queue)" },
            { color: "#00b894", label: "Đã xong (Processed)" }
        ]
    },
    {
        id: 96,
        name: "DP LIS (O(n^2))",
        category: "dp",
        desc: "Longest Increasing Subsequence bằng quy hoạch động O(n²).",
        time: "O(n²)",
        space: "O(n)",
        code: `for i=0→n-1:
    dp[i]=1
    for j=0→i-1:
        if a[j]<a[i]:
        dp[i]=max(dp[i],dp[j]+1)`,
        legend: [
            { color: "#60a5fa", label: "Đang xét i" },
            { color: "#34d399", label: "dp[i] được cập nhật" }
        ]
    },


    {
        id: 95,
        name: "DP Frog Jump",
        category: "dp",
        desc: "Ếch nhảy từ 1 → N, mỗi bước nhảy 1 hoặc 2 bậc, tối thiểu hóa tổng |h[i] - h[j]|.",
        time: "O(n)",
        space: "O(n)",
        code: `dp[0] = 0;
    for (i = 1 → n-1)
    dp[i] = min(dp[i-1] + |h[i]-h[i-1]|,
                dp[i-2] + |h[i]-h[i-2]|);`,
        legend: [
            { color: "#60a5fa", label: "Đang tính dp[i]" },
            { color: "#34d399", label: "Giá trị được cập nhật" }
        ]
    },

    {
        id: 93,
        name: "DP on DAG (Longest Path)",
        category: "dp",
        desc: "Tìm đường đi dài nhất trên đồ thị có hướng không chu trình (DAG) bằng quy hoạch động theo thứ tự topo.",
        time: "O(V + E)",
        space: "O(V)",
        code: `topoSort();
    for (u in topo_order) {
        for (v in adj[u]) {
            dp[v] = max(dp[v], dp[u] + weight(u,v));
        }
    }`,
        legend: [
            { color: "#60a5fa", label: "Đang xét đỉnh" },
            { color: "#34d399", label: "Cập nhật dp[v]" }
        ]
    },
    {
        id: 94,
        name: "LCS (Longest Common Subsequence)",
        category: "dp",
        desc: "Tìm dãy con chung dài nhất giữa hai chuỗi bằng quy hoạch động bảng 2 chiều.",
        time: "O(n × m)",
        space: "O(n × m)",
        code: `if (s1[i] == s2[j]) 
        dp[i][j] = dp[i-1][j-1] + 1;
    else
        dp[i][j] = max(dp[i-1][j], dp[i][j-1]);`,
        legend: [
            { color: "#60a5fa", label: "Đang xét ô" },
            { color: "#34d399", label: "Ký tự khớp" }
        ]
    },

   { 
        id: 13, 
        name: "Bubble Sort", 
        category: "sorting", 
        desc: "Sắp xếp nổi bọt: Hoán đổi các phần tử liền kề nếu chúng sai thứ tự. Lặp lại cho đến khi mảng được sắp xếp.",
        time: "O(n²)",    
        space: "O(1)",    
        code: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1])
                swap(arr[j], arr[j+1]);
}` ,
    legend: [
            { color: "#60a5fa", label: "Chưa xếp" },
            { color: "#f87171", label: "Đang so sánh" },
            { color: "#a78bfa", label: "Đã xếp xong" }
        ]
    },
    { 
        id: 20, 
        name: "Quick Sort", 
        category: "sorting", 
        desc: "Chọn một phần tử 'chốt' (pivot), chia mảng thành 2 phần: nhỏ hơn chốt và lớn hơn chốt. Sau đó đệ quy.",
        time: "O(n log n)", 
        space: "O(log n)",
        code: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
    legend: [
            { color: "#60a5fa", label: "Chưa xếp" },
            { color: "#facc15", label: "Pivot (Chốt)" },
            { color: "#f87171", label: "Đang xét" },
            { color: "#a78bfa", label: "Đã xếp xong" }
        ]
    },
    { 
        id: 21, 
        name: "Merge Sort", 
        category: "sorting", 
        desc: "Sắp xếp trộn: Chia đôi mảng liên tục cho đến khi còn 1 phần tử, sau đó gộp (merge) các phần tử lại theo đúng thứ tự.",
        time: "O(n log n)", 
        space: "O(n)",
        code: `void merge(int arr[], int l, int m, int r) {
    // Tạo mảng phụ L[] và R[]...
    // Gộp hai mảng phụ lại vào arr[]...
}

void mergeSort(int arr[], int l, int r) {
    if(l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
        legend: [
            { color: "#60a5fa", label: "Chưa xếp" },
            { color: "#f87171", label: "Mảng Trái" },
            { color: "#fbbf24", label: "Mảng Phải" },
            { color: "#10b981", label: "Đang gộp" }
        ]
    },
    { 
        id: 15, 
        name: "Binary Search", 
        category: "sorting",
        desc: "Tìm kiếm nhị phân: CHỈ hoạt động trên mảng đã sắp xếp. Chia đôi phạm vi tìm kiếm mỗi lần so sánh.",
        time: "O(log n)", 
        space: "O(1)",
        code: `int binarySearch(int arr[], int l, int r, int x) {
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == x) return m;
        if (arr[m] < x) l = m + 1;
        else r = m - 1;
    }
    return -1;
}`,
        legend: [
            { color: "#3b82f6", label: "Phạm vi tìm kiếm" }, 
            { color: "#e5e7eb", label: "Đã loại bỏ" },      
            { color: "#facc15", label: "Mid (Đang xét)" },  
            { color: "#10b981", label: "Tìm thấy" }         
        ]
    },
    { 
        id: 30, 
        name: "Segment Tree", 
        category: "data", 
        desc: "Cây phân đoạn: Cấu trúc dữ liệu cây dùng để lưu trữ thông tin của các khoảng. Hỗ trợ tính Tổng, Min hoặc Max cực nhanh.",
        time: "O(n) Build", 
        space: "O(4n)",
        code: `// Code sẽ thay đổi tùy theo chế độ bạn chọn (Sum/Min/Max)`,
        legend: [
            { color: "#e5e7eb", label: "Chưa xử lý" },
            { color: "#facc15", label: "Đang tính (Con)" },
            { color: "#10b981", label: "Đã xong (Cha)" }
        ]
    },
    {
        id: 33,
        name: "Prefix Sum Array",
        category: "data", 
        desc: "Mảng cộng dồn S[i] = S[i-1] + A[i]. Dùng để tính tổng đoạn [L, R] trong O(1).",
        time: "O(N)",
        space: "O(N)",
        code: `S[i] = S[i-1] + A[i]`
    },
    {
        id: 34,
        name: "Difference Array",
        category: "data", 
        desc: "Mảng hiệu D[i] = A[i] - A[i-1]. Dùng để update đoạn [L, R] trong O(1).",
        time: "O(N)",
        space: "O(N)",
        code: `D[i] = A[i] - A[i-1] \n// PrefixSum(D) = A`
    },
    {
        id: 40,
        name: "Sieve of Eratosthenes",
        category: "math",
        desc: "Sàng Eratosthenes: Thuật toán tìm tất cả các số nguyên tố nhỏ hơn N. Bằng cách loại bỏ các bội số của từng số nguyên tố bắt đầu từ 2.",
        time: "O(N log(log N))",
        space: "O(N)",
        code: `vector<bool> isPrime(n + 1, true);
isPrime[0] = isPrime[1] = false;
for (int p = 2; p * p <= n; p++) {
    if (isPrime[p] == true) {
        for (int i = p * p; i <= n; i += p)
            isPrime[i] = false;
    }
}`,
        legend: [
            { color: "#e5e7eb", label: "Chưa xét" },
            { color: "#3b82f6", label: "Đang xét (P)" },
            { color: "#ef4444", label: "Đã loại (Bội số)" },
            { color: "#10b981", label: "Số nguyên tố" }
        ]
    },
    {
        id: 50,
        name: "Fenwick Tree",
        category: "data", 
        desc: "Fenwick Tree (BIT): Cấu trúc dữ liệu giúp tính tổng tiền tố và cập nhật giá trị trong O(log N). Sử dụng thao tác bit (i & -i) để nhảy giữa các nút.",
        time: "O(log N)",
        space: "O(N)",
        code: `void update(int idx, int val) {
    for (; idx <= n; idx += idx & -idx)
        bit[idx] += val;
}
int query(int idx) {
    int sum = 0;
    for (; idx > 0; idx -= idx & -idx)
        sum += bit[idx];
    return sum;
}`,
        legend: [
            { color: "#3b82f6", label: "Mảng Gốc (A)" },
            { color: "#8b5cf6", label: "Mảng BIT (Tree)" },
            { color: "#10b981", label: "Đang xét / Update" },
            { color: "#f59e0b", label: "Đường đi (Path)" }
        ]
    },
    {
        id: 51,
        name: "Disjoint Set Union",
        category: "graph",
        desc: "DSU (Union-Find): Quản lý tập hợp rời rạc. Tối ưu bằng 2 kỹ thuật: (1) Nén đường (Path Compression) và (2) Hợp nhất theo kích thước (Union by Size - Cây nhỏ gắn vào cây lớn).",
        time: "O(α(N))", 
        space: "O(N)",
        code: `// Union by Size
void unionSets(int u, int v) {
    u = find(u);
    v = find(v);
    if (u != v) {
        if (size[u] < size[v]) swap(u, v);
        parent[v] = u; // Gắn cây nhỏ (v) vào cây lớn (u)
        size[u] += size[v];
    }
}`,
        legend: [
            { color: "#3b82f6", label: "Tập hợp A" },
            { color: "#ef4444", label: "Tập hợp B" },
            { color: "#10b981", label: "Gốc (Root)" },
            { color: "#f59e0b", label: "Đang tìm (Find)" }
        ]
    },
    {
        id: 60,
        name: "Tarjan's Algo (SCC)",
        category: "graph",
        desc: "Thuật toán Tarjan: Tìm các thành phần liên thông mạnh (SCC) trong đồ thị có hướng. Sử dụng DFS kết hợp với mảng ids (discovery time) và low-link value.",
        time: "O(V + E)",
        space: "O(V)",
        code: `void dfs(int at) {
    stack.push(at);
    onStack[at] = true;
    ids[at] = low[at] = idCounter++;

    for (int to : adj[at]) {
        if (ids[to] == -1) {
            dfs(to);
            low[at] = min(low[at], low[to]);
        } else if (onStack[to]) {
            low[at] = min(low[at], ids[to]);
        }
    }

    if (ids[at] == low[at]) {
        while (!stack.isEmpty()) {
            node = stack.pop();
            onStack[node] = false;
            // Add node to current SCC
            if (node == at) break;
        }
    }
}`,
        legend: [
            { color: "#e5e7eb", label: "Chưa thăm" },
            { color: "#3b82f6", label: "Đang trong Stack" },
            { color: "#f59e0b", label: "SCC tìm thấy" },
            { color: "#10b981", label: "Đã xử lý xong" }
        ]
    },
    {
        id: 70,
        name: "Kruskal's Algorithm",
        category: "graph",
        desc: "Thuật toán tìm Cây khung nhỏ nhất (MST). Sắp xếp tất cả các cạnh theo trọng số tăng dần. Duyệt từng cạnh, nếu cạnh không tạo chu trình (dùng DSU để check) thì thêm vào cây.",
        time: "O(E log E)",
        space: "O(V + E)",
        code: `struct Edge { int u, v, w; };
sort(edges.begin(), edges.end(), [](Edge a, Edge b) {
    return a.w < b.w;
});

for (Edge e : edges) {
    if (find(e.u) != find(e.v)) {
        unionSets(e.u, e.v);
        mstWeight += e.w;
        mstEdges.push_back(e);
    }
}`,
        legend: [
            { color: "#e5e7eb", label: "Cạnh chưa xét" },
            { color: "#3b82f6", label: "Đang xét" },
            { color: "#10b981", label: "CHẤP NHẬN (MST)" },
            { color: "#ef4444", label: "TỪ CHỐI (Cycle)" }
        ]
    },
    {
        id: 80,
        name: "Dijkstra's Algorithm",
        category: "graph",
        desc: "Thuật toán tìm đường đi ngắn nhất từ một điểm nguồn đến các điểm còn lại trong đồ thị có trọng số không âm. Sử dụng nguyên lý tham lam (Greedy).",
        time: "O(E log V)",
        space: "O(V + E)",
        code: `priority_queue<pii, vector<pii>, greater<pii>> pq;
pq.push({0, start});
dist[start] = 0;

while (!pq.empty()) {
    int u = pq.top().second;
    pq.pop();

    for (auto edge : adj[u]) {
        int v = edge.to;
        int w = edge.weight;
        if (dist[u] + w < dist[v]) {
            dist[v] = dist[u] + w;
            pq.push({dist[v], v});
        }
    }
}`,
        legend: [
            { color: "#e5e7eb", label: "Chưa xét (∞)" },
            { color: "#3b82f6", label: "Đang chọn (Min)" },
            { color: "#f59e0b", label: "Hàng xóm (Relax)" },
            { color: "#10b981", label: "Đã chốt (Done)" }
        ]
    },
    { 
        id: 30,
        name: "Lowest Common Ancestor", 
        category: "graph", 
        desc: "Tìm tổ tiên chung gần nhất (LCA) của hai nút trong cây. Giải thuật: Đưa 2 nút về cùng độ sâu, sau đó cùng nhảy lên cha cho đến khi gặp nhau.",
        time: "O(h)",    
        space: "O(N)",   
        code: `// C++ Implementation
int getLCA(int u, int v) {
    // 1. Cân bằng độ sâu
    while (depth[u] > depth[v]) u = parent[u];
    while (depth[v] > depth[u]) v = parent[v];
    // 2. Cùng nhảy lên
    while (u != v) {
        u = parent[u];
        v = parent[v];
    }
    return u;
}`,
        legend: [
            { color: "#0984e3", label: "Nút U (Đang xét)" },
            { color: "#e17055", label: "Nút V (Đang xét)" },
            { color: "#00b894", label: "Kết quả (LCA)" }
        ]
    },
    {
    id: 90,
    name: "0/1 Knapsack (DP)",
    category: "dp",
    desc: "Bài toán cái túi 0/1: Với mỗi vật có trọng lượng và giá trị, chọn các vật sao cho tổng trọng lượng không vượt quá sức chứa và tổng giá trị là lớn nhất.",
    time: "O(n × W)",
    space: "O(n × W)",
    code: `for (int i = 1; i <= n; i++) {
    for (int w = 0; w <= W; w++) {
        if (weight[i] <= w)
            dp[i][w] = max(dp[i-1][w], value[i] + dp[i-1][w-weight[i]]);
        else
            dp[i][w] = dp[i-1][w];
    }
}`,
    legend: [
        { color: "#e5e7eb", label: "Chưa tính" },
        { color: "#60a5fa", label: "Đang xét" },
        { color: "#34d399", label: "Giá trị được cập nhật" }
    ]
}

];
// --- KHO SEGMENT TREE ---
const segmentTreeCodes = {
    sum: `// CHẾ ĐỘ: TỔNG (SUM)
void build(int node, int start, int end) {
    if(start == end) {
        tree[node] = arr[start];
    } else {
        int mid = (start + end) / 2;
        build(2*node, start, mid);
        build(2*node+1, mid+1, end);
        
        // Logic TỔNG
        tree[node] = tree[2*node] + tree[2*node+1];
    }
}`,
    min: `// CHẾ ĐỘ: MIN
void build(int node, int start, int end) {
    if(start == end) {
        tree[node] = arr[start];
    } else {
        int mid = (start + end) / 2;
        build(2*node, start, mid);
        build(2*node+1, mid+1, end);
        
        // Logic MIN
        tree[node] = min(tree[2*node], tree[2*node+1]);
    }
}`,
    max: `// CHẾ ĐỘ: MAX
void build(int node, int start, int end) {
    if(start == end) {
        tree[node] = arr[start];
    } else {
        int mid = (start + end) / 2;
        build(2*node, start, mid);
        build(2*node+1, mid+1, end);
        
        // Logic MAX
        tree[node] = max(tree[2*node], tree[2*node+1]);
    }
}`
};
// --- CÁC BIẾN TOÀN CỤC QUAN TRỌNG ---
const listContainer = document.getElementById('algo-list');
const visualizer = document.getElementById('visualizer-container');
const statusText = document.getElementById('status-text');
const btnRun = document.getElementById('btn-run');
const btnPause = document.getElementById('btn-pause');
let arrayData = []; 
let isRunning = false;  
let isPaused = false;   
let shouldKill = false; 
let delayTime = 250;   
let pauseResolve = null;
let currentSpeed = 1;
// --- KHỞI CHẠY ---
window.onload = function() {
    filterAlgorithms('sorting'); 
    generateData();
    updateSpeed(); 
    const defaultAlgo = algorithms.find(a => a.name === "Bubble Sort");
    if (defaultAlgo) {
        renderLegend(defaultAlgo); 
        document.getElementById('algo-desc').innerText = defaultAlgo.desc;
        document.getElementById('algo-code').innerText = defaultAlgo.code;
        document.getElementById('time-complexity').innerText = defaultAlgo.time;
        document.getElementById('space-complexity').innerText = defaultAlgo.space;
    }
};
 // --- HÀM UPDATE SPEED ---
function updateSpeed() {
    const val = document.getElementById('speedSlider').value;
    delayTime = 2010 - val; 
}
// --- HÀM SLEEP ---
function sleep(ms) {
    const timeToWait = (ms !== undefined) ? ms : delayTime;
    return new Promise((resolve) => {
        setTimeout(async () => {
            if (isPaused) {
                await new Promise((r) => { pauseResolve = r; });
            }
            resolve();
        }, timeToWait);
    });
}
// --- BIẾN TOÀN CỤC KNAPSACK ---
let knapItems = [];
let knapCapacity = 0;
let knapTable = [];
// --- HÀM TẠO GIAO DIỆN KNAPSACK ---
// ==========================================
// 16. KNAPSACK UI (BẢNG NHỎ GỌN & CÂN ĐỐI)
// ==========================================
function generateKnapsackUI() {
    const container = document.getElementById('visualizer-container');
    knapCapacity = 8; 
    const numItems = 5;
    knapItems = Array.from({length: numItems}, (_, i) => ({
        id: i+1,
        w: Math.floor(Math.random() * 4) + 1, 
        v: Math.floor(Math.random() * 10) + 5  
    }));

    const rows = numItems + 1;
    const cols = knapCapacity + 1;

    // 2. Tạo HTML
    // Item Panel
    let itemsHTML = knapItems.map(item => 
        `<div class="knap-item-box">#${item.id}: ${item.w}kg - $${item.v}</div>`
    ).join('');

    // --- ĐIỂM SỬA ĐỔI: Dùng class nhỏ (small) ---
    
    // Header hàng đầu tiên (0 -> Capacity)
    let gridHTML = `<div class="dp-header-small" style="width:50px">Item</div>`; // Cột đầu 50px
    for(let w = 0; w <= knapCapacity; w++) {
        gridHTML += `<div class="dp-header-small">${w}</div>`;
    }

    // Các hàng dữ liệu
    // Hàng 0 (Rỗng)
    gridHTML += `<div class="dp-header-small" style="width:50px">Ø</div>`;
    for(let w = 0; w <= knapCapacity; w++) {
        gridHTML += `<div id="knap-cell-0-${w}" class="dp-cell-small">0</div>`;
    }

    // Hàng đồ vật
    knapItems.forEach((item, idx) => {
        let i = idx + 1;
        // Cột tên đồ vật
        gridHTML += `<div class="dp-header-small" style="width:50px; justify-content:flex-start; padding-left:5px;">#${item.id}</div>`;
        
        // Các ô giá trị
        for(let w = 0; w <= knapCapacity; w++) {
            gridHTML += `<div id="knap-cell-${i}-${w}" class="dp-cell-small">0</div>`;
        }
    });

    // Tính toán lại chiều rộng grid cho khớp
    // Cột đầu 50px, các cột sau 32px
    const gridTemplate = `50px repeat(${cols}, 32px)`;

    container.innerHTML = `
        <div class="dp-2d-layout">
            <div class="knap-items-panel">
                <div style="background:#fdcb6e; color:#2d3436; padding:4px 8px; border-radius:4px; font-weight:bold; font-size:11px;">
                    Max: ${knapCapacity}kg
                </div>
                ${itemsHTML}
            </div>

            <div class="dp-matrix-area">
                <div class="dp-matrix" style="grid-template-columns: ${gridTemplate}; gap: 2px;">
                    ${gridHTML}
                </div>
            </div>

            <div id="knap-info" class="frog-log" style="height: 60px;">
                Sẵn sàng chạy!
            </div>
        </div>
    `;
}
// --- RUNNER KNAPSACK ---
async function runKnapsack() {
    if(typeof isRunning !== 'undefined' && isRunning) { shouldKill = true; isRunning = false; await sleep(100); }
    const btnRun = document.getElementById('btn-run');
    const btnPause = document.getElementById('btn-pause');
    const infoBox = document.getElementById('knap-info');

    isRunning = true; isPaused = false; shouldKill = false;
    if(btnRun) btnRun.disabled = true; 
    if(btnPause) { btnPause.disabled = false; btnPause.innerText = "Tạm dừng"; }

    const n = knapItems.length;
    const W = knapCapacity;
    knapTable = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));
    document.querySelectorAll('.dp-cell').forEach(el => {
        el.className = 'dp-cell'; el.innerText = '0';
    });
    for (let i = 1; i <= n; i++) {
        let item = knapItems[i-1]; 
        for (let w = 0; w <= W; w++) {
            if(shouldKill) { isRunning=false; if(btnRun) btnRun.disabled=false; return; }
            while(isPaused) { infoBox.innerHTML = "Đang tạm dừng..."; await sleep(100); }
            let cell = document.getElementById(`knap-cell-${i}-${w}`);
            cell.classList.add("dp-active");
            infoBox.innerHTML = `Xét Item ${item.id} (W:${item.w}, V:${item.v}) tại sức chứa ${w}`;
            await sleep(300);
            if (item.w <= w) {
                let valExclude = knapTable[i-1][w];
                let valInclude = item.v + knapTable[i-1][w - item.w];
                let cellEx = document.getElementById(`knap-cell-${i-1}-${w}`);
                let cellIn = document.getElementById(`knap-cell-${i-1}-${w-item.w}`);
                if(cellEx) cellEx.classList.add("dp-compare");
                if(cellIn) cellIn.classList.add("dp-compare");
                infoBox.innerHTML += `<br>So sánh: Bỏ qua (${valExclude}) vs Chọn (${valInclude})`;
                await sleep(800);
                knapTable[i][w] = Math.max(valExclude, valInclude);
                cell.innerText = knapTable[i][w];

                if(cellEx) cellEx.classList.remove("dp-compare");
                if(cellIn) cellIn.classList.remove("dp-compare");
            } else {
                // Không thể chọn (quá nặng)
                let cellEx = document.getElementById(`knap-cell-${i-1}-${w}`);
                if(cellEx) cellEx.classList.add("dp-match"); // Xanh lá báo hiệu copy xuống
                
                knapTable[i][w] = knapTable[i-1][w];
                cell.innerText = knapTable[i][w];
                infoBox.innerHTML += `<br>Quá nặng (${item.w} > ${w}). Lấy giá trị hàng trên.`;
                await sleep(500);
                if(cellEx) cellEx.classList.remove("dp-match");
            }
            
            cell.classList.remove("dp-active");
        }
    }

    // --- TRUY VẾT ---
    infoBox.innerHTML = "Hoàn tất. Truy vết đồ vật được chọn...";
    let w = W;
    let selectedItems = [];
    
    for (let i = n; i > 0; i--) {
        if(shouldKill) break;
        let cell = document.getElementById(`knap-cell-${i}-${w}`);
        cell.classList.add("dp-result"); // Vàng

        if (knapTable[i][w] !== knapTable[i-1][w]) {
            let item = knapItems[i-1];
            selectedItems.push(item.id);
            infoBox.innerHTML = `Giá trị thay đổi -> <b>Chọn Item ${item.id}</b>`;
            w -= item.w;
            await sleep(800);
        } else {
             infoBox.innerHTML = `Giá trị giữ nguyên -> Không chọn Item ${knapItems[i-1].id}`;
             await sleep(300);
        }
    }

    infoBox.innerHTML = `<b>Kết quả: Chọn các món [${selectedItems.reverse().join(', ')}] -> Tổng giá trị: ${knapTable[n][W]}</b>`;
    isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}

// --- LOGIC CHỌN VÀ LỌC ---
function filterAlgorithms(type) {
    updateActiveButton(type);
    const filteredList = algorithms.filter(algo => algo.category === type);
    listContainer.innerHTML = '';
    filteredList.forEach(algo => {
        const li = document.createElement('li');
        li.innerText = algo.name;
        li.onclick = (e) => selectAlgo(algo, e);
        if(algo.name === document.getElementById('algo-title').innerText) li.classList.add('active');
        listContainer.appendChild(li);
    });
}
function updateActiveButton(type) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('onclick').includes(type)) btn.classList.add('active');
    });
}
// --- CHUYỂN THUẬT TOÁN  ---
function selectAlgo(algo, event) {
    hardReset(); 
    document.querySelectorAll('.sidebar li').forEach(el => el.classList.remove('active'));
    if(event && event.target) event.target.classList.add('active');
    document.getElementById('algo-title').innerText = algo.name;
    document.getElementById('algo-desc').innerText = algo.desc;
    document.getElementById('time-complexity').innerText = algo.time || "?";
    document.getElementById('space-complexity').innerText = algo.space || "?";
    const codeBlock = document.getElementById('algo-code');
    codeBlock.innerText = ""; 
    codeBlock.innerText = algo.code; 
    renderLegend(algo); 
    const inputField = document.getElementById('binary-input');
    const segSelect = document.getElementById('seg-mode');
    if(inputField) inputField.style.display = "none";
    if(segSelect) {
        segSelect.style.display = "none";
        segSelect.onchange = null;
    }
    if (algo.name === "Binary Search") {
        if(inputField) inputField.style.display = "block";
        generateData();
    } 
    else if (algo.name === "Segment Tree") {
        if(segSelect) {
            segSelect.style.display = "block";
            segSelect.onchange = updateSegCode; 
        }
        if(typeof updateSegCode === "function") updateSegCode();
        if(typeof generateSegmentTreeUI === "function") generateSegmentTreeUI();
    } 
    else if (algo.name === "DP on DAG (Longest Path)") {
            if(typeof generateDAGDPUI === "function") generateDAGDPUI();
    }
    else if (algo.name === "LCS (Longest Common Subsequence)") {
        if(typeof  generateLCSUI === "function") generateLCSUI();
    }
    else if (algo.name === "DP Frog Jump") {
        if(typeof  generateFrogUI === "function") generateFrogUI();
    }
    else if (algo.name === "DP LIS (O(n^2))") {
            if(typeof  generateLISUI === "function") generateLISUI();
    }
    else if (algo.name === "Prefix Sum Array") {
        if(typeof generatePrefixOnlyUI === "function") generatePrefixOnlyUI();
    }
    else if (algo.name === "Difference Array") {
        if(typeof generateDiffOnlyUI === "function") generateDiffOnlyUI();
    }
    else if (algo.name === "Sieve of Eratosthenes") {
        if(typeof generateSieveUI === "function") generateSieveUI();
    }
    else if (algo.name === "Fenwick Tree") {
        if(typeof generateFenwickUI === "function") generateFenwickUI();
    }
    else if (algo.name === "Disjoint Set Union") {
        if(typeof generateDSUUI === "function") generateDSUUI();
    }
    else if (algo.name === "Tarjan's Algo (SCC)") {
        if(typeof generateTarjanUI === "function") generateTarjanUI();
    }
    else if (algo.name === "Kruskal's Algorithm") {
         if(typeof generateKruskalUI === "function") generateKruskalUI();
    }
    else if (algo.name === "Dijkstra's Algorithm") {
         if(typeof generateDijkstraUI === "function") generateDijkstraUI();
    }
    else if (algo.name === "Lowest Common Ancestor") {
        if(typeof generateLCAUI === "function") generateLCAUI();
    }
    else if (algo.name === "0/1 Knapsack (DP)") {
         if(typeof generateKnapsackUI === "function") generateKnapsackUI();
    }
    else if (algo.name === "Depth First Search (DFS)") {
        if(typeof generateDFSUI === "function") generateDFSUI();
    }
    else if (algo.name === "Breadth First Search (BFS)") {
        if(typeof generateBFSUI === "function") generateBFSUI();
    }
    else if (algo.name === "Trie (Prefix Tree)") {
        if(typeof generateTrieUI === "function") generateTrieUI();
    }
    else if (algo.name === "Two Pointers") {
        if(typeof generateTwoPointersUI === "function") generateTwoPointersUI();
    }
    else {
        generateData();
    }
}
// ---  HÀM RESET ---
function hardReset() {
    shouldKill = true;
    isRunning = false;
    isPaused = false;
    if (btnRun) {
        btnRun.disabled = false;          
        btnRun.style.opacity = "1";       
        btnRun.style.cursor = "pointer";
        btnRun.innerText = "Chạy";
    }
    if (btnPause) {
        btnPause.disabled = true;
        btnPause.style.opacity = "0.5";
        btnPause.style.cursor = "not-allowed";
        btnPause.innerText = "Tạm dừng";
    }
    if (statusText) {
        statusText.innerText = "Trạng thái: Sẵn sàng";
        statusText.style.color = "#333";
    }
    visualizer.innerHTML = '';
    const logBox = document.querySelector('.process-log');
    if (logBox) logBox.remove();
    visualizer.style.flexDirection = "row";
    visualizer.style.alignItems = "flex-end";
    visualizer.style.justifyContent = "center";
}
// --- HÀM XỬ LÝ NÚT PAUSE/RESUME ---
function togglePause() {
    if (!isRunning) return; 
    const btn = document.getElementById('btn-pause');
    if (!isPaused) {
        isPaused = true;
        btn.innerText = "Tiếp tục ▶";
        btn.classList.add('active-pause');
    } else {
        isPaused = false;
        btn.innerText = "Tạm dừng ⏸";
        btn.classList.remove('active-pause');
        if (pauseResolve) {
            pauseResolve();
            pauseResolve = null;
        }
    }
}
// --- TẠO DỮ LIỆU ---
function generateData() {
    if (isRunning) return; 
    const titleEl = document.getElementById('algo-title');
    const currentAlgo = titleEl ? titleEl.innerText : "";
    const visualizer = document.getElementById('visualizer-container');
    if (currentAlgo === "Prefix Sum Array") {
        if(typeof generatePrefixOnlyUI === "function") generatePrefixOnlyUI();
        return;
    }
    if (currentAlgo === "DP on DAG (Longest Path)") {
        if(typeof generateDAGDPUI === "function") generateDAGDPUI();
        return;
    }
    if (currentAlgo === "DP LIS (O(n^2))") {
        if(typeof generateLISUI === "function") generateLISUI();
        return;
    }
    if (currentAlgo === "DP Frog Jump") {
        if(typeof generateFrogUI === "function") generateFrogUI();
        return;
    }
    if (currentAlgo === "LCS (Longest Common Subsequence)") {
         if(typeof generateLCSUI === "function") generateLCSUI();
        return;
    }
    if (currentAlgo === "0/1 Knapsack (DP)") {
        if(typeof  generateKnapsackUI === "function") generateKnapsackUI();
        return;
    }
    if (currentAlgo === "Difference Array") {
        if(typeof generateDiffOnlyUI === "function") generateDiffOnlyUI();
        return;
    }
    if (currentAlgo === "Sieve of Eratosthenes") {
        if(typeof generateSieveUI === "function") generateSieveUI();
        return;
    }
    if (currentAlgo === "Fenwick Tree") {
        if(typeof generateFenwickUI === "function") generateFenwickUI();
        return;
    }
    if (currentAlgo === "Disjoint Set Union") {
        if(typeof generateDSUUI === "function") generateDSUUI();
        return;
    }
    if (currentAlgo === "Tarjan's Algo (SCC)") {
        if(typeof generateTarjanUI === "function") generateTarjanUI();
        return;
    }
    if (currentAlgo === "Kruskal's Algorithm") {
        if(typeof generateKruskalUI === "function") generateKruskalUI();
        return;
    }
    if (currentAlgo === "Dijkstra's Algorithm") {
        if(typeof generateDijkstraUI === "function") generateDijkstraUI();
        return;
    }
    if (currentAlgo === "Lowest Common Ancestor") {
        if(typeof generateLCAUI === "function") generateLCAUI();
        return;
    }
    if (currentAlgo === "Depth First Search (DFS)") {
        if(typeof generateDFSUI === "function") generateDFSUI();
        return;
    }
    if (currentAlgo === "Breadth First Search (BFS)") {
        if(typeof generateBFSUI === "function") generateBFSUI();
        return;
    }
    if (currentAlgo === "Trie (Prefix Tree)") {
        if(typeof generateTrieUI === "function") generateTrieUI();
        return;
    }
    if (currentAlgo === "Two Pointers") {
        if(typeof generateTwoPointersUI === "function") generateTwoPointersUI();
        return;
    }
    if (currentAlgo === "Segment Tree") {
        if (typeof generateSegmentTreeUI === "function") {
            generateSegmentTreeUI();
        } else {
            console.error("Chưa có hàm generateSegmentTreeUI!");
        }
        return;
    }
    visualizer.innerHTML = '';
    visualizer.style.flexDirection = "row";
    visualizer.style.alignItems = "flex-end";
    arrayData = [];
    for (let i = 0; i < 20; i++) { 
        const value = Math.floor(Math.random() * 90) + 10;
        arrayData.push(value);
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 3}px`;
        bar.innerText = value;
        bar.style.color = 'black'; 
        bar.style.fontWeight = 'bold';
        bar.style.display = 'flex';
        bar.style.alignItems = 'flex-end';
        bar.style.justifyContent = 'center';
        bar.style.fontSize = '12px';
        visualizer.appendChild(bar);
    }
}
// --- ROUTER ---
function startSimulation() {
    if(isRunning) return;
    const currentAlgo = document.getElementById('algo-title').innerText;
    if (currentAlgo === "Bubble Sort") {
        bubbleSort();
    } else if (currentAlgo === "LCS (Longest Common Subsequence)") {
        runLCS();
    } else if (currentAlgo === "DP on DAG (Longest Path)") {
        runDAGDP();
    } else if (currentAlgo === "DP LIS (O(n^2))") {
        runLIS();
    } else if (currentAlgo === "DP Frog Jump") {
        runFrog();
    } else if (currentAlgo === "Quick Sort") {
        quickSort();
    } else if (currentAlgo === "Merge Sort") {
        mergeSort();
    } else if (currentAlgo === "Binary Search") { 
        binarySearch();
    } else if (currentAlgo === "Segment Tree") {
        runSegmentTree(); // Gọi hàm mới
    } else if (currentAlgo === "Prefix Sum Array") {
        runPrefixOnly();
    } else if (currentAlgo === "Difference Array") {
        runDiffOnly();   
    } else if (currentAlgo === "Sieve of Eratosthenes") {
        runSieve();
    } else if (currentAlgo === "Fenwick Tree") {
        runFenwick();
    } else if (currentAlgo === "Disjoint Set Union") {
        runDSU();
    } else if (currentAlgo === "Tarjan's Algo (SCC)") {
        runTarjan();
    } else if (currentAlgo === "Kruskal's Algorithm") {
        runKruskal();
    } else if (currentAlgo === "Dijkstra's Algorithm") {
        runDijkstra();
    } else if (currentAlgo === "Lowest Common Ancestor") {
        runLCA();
    } else if (currentAlgo === "0/1 Knapsack (DP)") {
        runKnapsack();
    } else if (currentAlgo === "Depth First Search (DFS)") {
        runDFS();
    } else if (currentAlgo === "Breadth First Search (BFS)") {
        runBFS();
    } else if (currentAlgo === "Trie (Prefix Tree)") {
        runTrie();
    } else if (currentAlgo === "Two Pointers") {
        runTwoPointers();
    } else {
        alert("Thuật toán này chưa được code!");
    }
}
// --- HÀM VẼ CHÚ THÍCH MÀU SẮC ---
function renderLegend(algo) {
    const container = document.getElementById('legend-container');
    if (!container) return;
    container.innerHTML = ''; 
    if (algo.legend) {
        algo.legend.forEach(item => {
            const div = document.createElement('div');
            div.className = 'legend-item';
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.gap = '5px';
            div.style.marginRight = '15px';
            const colorBox = document.createElement('span');
            colorBox.style.width = '15px';
            colorBox.style.height = '15px';
            colorBox.style.backgroundColor = item.color;
            colorBox.style.display = 'inline-block';
            colorBox.style.borderRadius = '3px';
            const text = document.createElement('span');
            text.innerText = item.label;
            text.style.fontSize = '14px';
            div.appendChild(colorBox);
            div.appendChild(text);
            container.appendChild(div);
        });
    }
}
// --- BUBBLE SORT  ---
async function bubbleSort() {
    isRunning = true;
    shouldKill = false;
    isPaused = false;
    btnRun.disabled = true;
    btnRun.style.opacity = "0.5";
    btnPause.disabled = false; 
    statusText.innerText = "Đang chạy Bubble Sort...";
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < arrayData.length; i++) {
        for (let j = 0; j < arrayData.length - i - 1; j++) {
            if (shouldKill) { isRunning = false; return; } 
            await sleep(); 
            if (shouldKill) { isRunning = false; return; }
            bars[j].style.backgroundColor = '#f87171';
            bars[j+1].style.backgroundColor = '#f87171';
            if (arrayData[j] > arrayData[j + 1]) {
                let temp = arrayData[j];
                arrayData[j] = arrayData[j + 1];
                arrayData[j + 1] = temp;
                bars[j].style.height = `${arrayData[j] * 3}px`;
                bars[j+1].style.height = `${arrayData[j+1] * 3}px`;
                bars[j].innerText = arrayData[j];
                bars[j+1].innerText = arrayData[j+1];
                bars[j].classList.add('swap');
                bars[j+1].classList.add('swap');
            }
            await sleep();
            if (shouldKill) { isRunning = false; return; }
            bars[j].style.backgroundColor = '#60a5fa';
            bars[j+1].style.backgroundColor = '#60a5fa';
            bars[j].classList.remove('swap');
            bars[j+1].classList.remove('swap');
        }
        bars[arrayData.length - i - 1].style.backgroundColor = '#a78bfa';
    }
    bars[0].style.backgroundColor = '#a78bfa';
    statusText.innerText = "Hoàn thành!";
    isRunning = false;
    btnRun.disabled = false;
    btnRun.style.opacity = "1";
    btnPause.disabled = true;
    btnPause.innerText = "Tạm dừng";
}
// --- QUICK SORT ---
async function quickSort() {
    shouldKill = false;
    isPaused = false;
    btnRun.disabled = true;
    btnRun.style.opacity = "0.5";
    btnPause.disabled = false;
    statusText.innerText = "Đang chạy Quick Sort...";
    await quickSortHelper(0, arrayData.length - 1);
    if (!shouldKill) {
        const bars = document.getElementsByClassName('bar');
        for (let k = 0; k < bars.length; k++) {
            bars[k].style.backgroundColor = '#a78bfa';
        }
        statusText.innerText = "Hoàn thành Quick Sort!";
        isRunning = false;
        btnRun.disabled = false;
        btnRun.style.opacity = "1";
        btnPause.disabled = true;
        btnPause.innerText = "Tạm dừng";
    }
}
async function quickSortHelper(low, high) {
    if (low < high) {
        if (shouldKill) return;
        let pi = await partition(low, high);
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
    }
}
async function partition(low, high) {
    if (shouldKill) return;
    const bars = document.getElementsByClassName('bar');
    let pivot = arrayData[high];
    bars[high].style.backgroundColor = '#facc15'; 
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        if (shouldKill) return;
        bars[j].style.backgroundColor = '#f87171';
        await sleep();
        if (shouldKill) return;
        if (arrayData[j] < pivot) {
            i++;
            swapBars(i, j);
            bars[i].classList.add('swap');
            bars[j].classList.add('swap');
            await sleep();
            bars[i].classList.remove('swap');
            bars[j].classList.remove('swap');
        }
        bars[j].style.backgroundColor = '#60a5fa';
    }
    swapBars(i + 1, high);
    bars[high].style.backgroundColor = '#60a5fa'; 
    bars[i + 1].style.backgroundColor = '#a78bfa'; 
    await sleep();
    return (i + 1);
}
function swapBars(idx1, idx2) {
    const bars = document.getElementsByClassName('bar');
    let temp = arrayData[idx1];
    arrayData[idx1] = arrayData[idx2];
    arrayData[idx2] = temp;
    bars[idx1].style.height = `${arrayData[idx1] * 3}px`;
    bars[idx2].style.height = `${arrayData[idx2] * 3}px`;
    bars[idx1].innerText = arrayData[idx1];
    bars[idx2].innerText = arrayData[idx2];
}
// --- MERGE SORT ---
async function mergeSort() {
    isRunning = true;
    shouldKill = false;
    isPaused = false;
    btnRun.disabled = true;
    btnRun.style.opacity = "0.5";
    btnPause.disabled = false;
    statusText.innerText = "Đang chạy Merge Sort...";
    await mergeSortHelper(0, arrayData.length - 1);
    if (!shouldKill) {
        const bars = document.getElementsByClassName('bar');
        for (let k = 0; k < bars.length; k++) {
            bars[k].style.backgroundColor = '#a78bfa';
        }
        statusText.innerText = "Hoàn thành Merge Sort!";
        isRunning = true;
        shouldKill = false;
        isPaused = false;
        btnRun.disabled = true;
        btnRun.style.opacity = "0.5";
        btnPause.disabled = false;
        btnPause.style.opacity = "1";  
        btnPause.style.cursor = "pointer";
        btnPause.innerText = "Tạm dừng";
    }
}
async function mergeSortHelper(l, r) {
    if (l >= r) return;
    if (shouldKill) return;
    const m = l + Math.floor((r - l) / 2);
    await mergeSortHelper(l, m);
    await mergeSortHelper(m + 1, r);
    await merge(l, m, r);
}
async function merge(low, mid, high) {
    if (shouldKill) return;
    const bars = document.getElementsByClassName('bar');
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let L = [], R = [];
    for (let i = 0; i < n1; i++) L[i] = arrayData[low + i];
    for (let j = 0; j < n2; j++) R[j] = arrayData[mid + 1 + j];
    for (let i = low; i <= mid; i++) {
        if(shouldKill) return;
        bars[i].style.backgroundColor = '#f87171'; 
    }
    for (let i = mid + 1; i <= high; i++) {
        if(shouldKill) return;
        bars[i].style.backgroundColor = '#fbbf24'; 
    }
    await sleep();
    let i = 0, j = 0, k = low;
    while (i < n1 && j < n2) {
        if (shouldKill) return;
        if (L[i] <= R[j]) {
            arrayData[k] = L[i];
            i++;
        } else {
            arrayData[k] = R[j];
            j++;
        }
        bars[k].style.height = `${arrayData[k] * 3}px`;
        bars[k].innerText = arrayData[k];
        bars[k].style.backgroundColor = '#10b981'; 
        await sleep(); 
        k++;
    }
    while (i < n1) {
        if (shouldKill) return;
        arrayData[k] = L[i];
        bars[k].style.height = `${arrayData[k] * 3}px`;
        bars[k].innerText = arrayData[k];
        bars[k].style.backgroundColor = '#10b981';
        await sleep();
        i++;
        k++;
    }
    while (j < n2) {
        if (shouldKill) return;
        arrayData[k] = R[j];
        bars[k].style.height = `${arrayData[k] * 3}px`;
        bars[k].innerText = arrayData[k];
        bars[k].style.backgroundColor = '#10b981'; // Xanh lá
        await sleep();
        j++;
        k++;
    }
    for (let x = low; x <= high; x++) {
         if(shouldKill) return;
         bars[x].style.backgroundColor = '#a78bfa'; 
    }
}
// --- BINARY SEARCH ---
async function binarySearch() {
    const inputField = document.getElementById('binary-input');
    const inputVal = inputField.value;
    if (inputVal === "") {
        alert("Vui lòng nhập số bạn muốn tìm!");
        return; 
    }
    const target = parseInt(inputVal);
    let logBox = document.querySelector('.process-log');
    if (!logBox) {
        logBox = document.createElement('div');
        logBox.className = 'process-log';
        visualizer.appendChild(logBox);
    }
    logBox.innerText = "Đang chuẩn bị dữ liệu...";
    isRunning = true;
    shouldKill = false;
    isPaused = false;
    btnRun.disabled = true;
    btnRun.style.opacity = "0.5";
    btnPause.disabled = false;
    btnPause.style.opacity = "1";    
    btnPause.style.cursor = "pointer";
    btnPause.innerText = "Tạm dừng";
    statusText.innerText = "Đang sắp xếp mảng tăng dần...";
    arrayData.sort((a, b) => a - b);
    visualizer.innerHTML = '';
    visualizer.appendChild(logBox); 
    const bars = []; 
    for (let i = 0; i < arrayData.length; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${arrayData[i] * 3}px`;
        bar.innerText = arrayData[i];
        bar.style.color = 'black'; 
        bar.style.fontWeight = 'bold';
        bar.style.display = 'flex';
        bar.style.alignItems = 'flex-end';
        bar.style.justifyContent = 'center';
        bar.style.fontSize = '12px';
        visualizer.appendChild(bar);
        bars.push(bar);
    }
    await sleep();
    statusText.innerText = `Đang tìm số: ${target}`;
    logBox.innerText = "Bắt đầu tìm kiếm...";
    let low = 0;
    let high = arrayData.length - 1;
    let found = false;
    while (low <= high) {
        if (shouldKill) return;
        let mid = Math.floor((low + high) / 2);
        let midVal = arrayData[mid];
        for (let i = 0; i < bars.length; i++) {
            if (i < low || i > high) {
                bars[i].style.backgroundColor = '#e5e7eb'; 
                bars[i].style.opacity = '0.3';
            } else if (i === mid) {
                bars[i].style.backgroundColor = '#facc15'; 
            } else {
                bars[i].style.backgroundColor = '#3b82f6'; 
                bars[i].style.opacity = '1';
            }
        }
        if (midVal === target) {
            logBox.innerText = `Mid = ${midVal}. BẰNG số cần tìm (${target})! => Đã tìm thấy.`;
            logBox.style.color = "#10b981"; 
        } else if (midVal < target) {
            logBox.innerText = `Mid (${midVal}) < ${target} \n➜ Số cần tìm lớn hơn, bỏ bên trái, tìm BÊN PHẢI.`;
            logBox.style.color = "#d97706"; 
        } else {
            logBox.innerText = `Mid (${midVal}) > ${target} \n➜ Số cần tìm nhỏ hơn, bỏ bên phải, tìm BÊN TRÁI.`;
            logBox.style.color = "#d97706"; 
        }
        await sleep();
        if (isPaused) {
            const oldText = statusText.innerText;
            statusText.innerText = "Đang tạm dừng...";
            while (isPaused) await new Promise(r => setTimeout(r, 100));
            statusText.innerText = oldText;
        }
        if (midVal === target) {
            bars[mid].style.backgroundColor = '#10b981';
            bars[mid].style.color = '#fff';
            statusText.innerText = `Đã tìm thấy số ${target} tại vị trí ${mid}!`;
            found = true;
            break; 
        } 
        if (midVal < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    if (!found) {
        logBox.innerText = `Đã duyệt hết dãy. Không tìm thấy số ${target}.`;
        logBox.style.color = "red";
        statusText.innerText = `Không tìm thấy số ${target}.`;
    }
    isRunning = false;
    btnRun.disabled = false;
    btnPause.disabled = true;
}
// ==========================================
// 14. DP ON DAG (LAYOUT CĂN GIỮA & GỌN)
// ==========================================
function generateDAGDPUI() {
    const container = document.getElementById('visualizer-container');
    container.innerHTML = '';

    // 1. Cấu hình các lớp (Layers)
    // Sắp xếp số lượng node sao cho nhìn cân đối (Hình thoi: ít -> nhiều -> ít)
    const layers = [
        [0],            // Layer 0: 1 node (Start)
        [1, 2],         // Layer 1: 2 node
        [3, 4, 5],      // Layer 2: 3 node (Phình to ở giữa)
        [6, 7],         // Layer 3: 2 node
        [8]             // Layer 4: 1 node (End)
    ];
    
    const numNodes = 9;
    dagAdj = Array.from({length: numNodes}, () => []);
    dagNodes = [];
    dagDP = new Array(numNodes).fill(0);
    dagTrace = new Array(numNodes).fill(-1);

    // 2. Tạo cạnh (Edges) - Chỉ nối tới lớp kế tiếp để tránh rối
    for(let i=0; i < layers.length - 1; i++) {
        let currLayer = layers[i];
        let nextLayer = layers[i+1];
        
        currLayer.forEach(u => {
            // Mỗi node u nối với 1 hoặc 2 node ở lớp kế tiếp
            // Shuffle lớp kế tiếp để nối ngẫu nhiên nhưng vẫn gọn
            let targets = [...nextLayer].sort(() => 0.5 - Math.random()); 
            
            // Đảm bảo ít nhất 1 kết nối
            dagAdj[u].push(targets[0]); 
            
            // 50% cơ hội nối thêm node thứ 2 (nếu có)
            if(targets.length > 1 && Math.random() > 0.5) {
                dagAdj[u].push(targets[1]);
            }
        });
    }
    
    // Đảm bảo node cuối cùng nhận được kết nối (fix lỗi node cô đơn)
    // Duyệt ngược để chắc chắn các node lớp cuối có cha
    for(let i = layers.length - 1; i > 0; i--) {
        let currLayer = layers[i];
        let prevLayer = layers[i-1];
        currLayer.forEach(v => {
            // Kiểm tra xem v có ai nối tới chưa
            let hasParent = false;
            for(let u of prevLayer) {
                if(dagAdj[u].includes(v)) hasParent = true;
            }
            // Nếu chưa ai nối tới v, ép node đầu tiên của lớp trước nối vào
            if(!hasParent) {
                dagAdj[prevLayer[0]].push(v);
            }
        });
    }

    // 3. Tính toán Tọa độ (CĂN GIỮA THẲNG HÀNG)
    const containerWidth = container.offsetWidth || 800;
    const containerHeight = 540;
    
    // Khoảng cách giữa các cột
    const colSpacing = containerWidth / layers.length;
    
    let nodesHTML = '';
    
    layers.forEach((layer, layerIdx) => {
        // Tọa độ X: Canh giữa cột
        let x = layerIdx * colSpacing + (colSpacing / 2) - 25; // Trừ nửa width node (50/2)
        
        // Tọa độ Y: CĂN GIỮA THEO CHIỀU DỌC
        const nodeSize = 50; 
        const gap = 40; // Khoảng cách giữa các node trong cùng 1 cột
        const totalLayerHeight = (layer.length * nodeSize) + ((layer.length - 1) * gap);
        
        // Điểm bắt đầu y sao cho cả nhóm node nằm giữa khung
        let startY = (containerHeight - totalLayerHeight) / 2;
        
        layer.forEach((u, idx) => {
            let y = startY + idx * (nodeSize + gap);
            dagNodes[u] = {x, y}; // Lưu tọa độ (Góc trên trái của div)
            
            nodesHTML += `
                <div id="dag-node-${u}" class="dag-node" style="left: ${x}px; top: ${y}px;">
                    <span class="idx">${u}</span>
                    <span class="val" id="dag-val-${u}">0</span>
                </div>
            `;
        });
    });

    // 4. Vẽ Dây (SVG Lines) - Dùng tọa độ tâm
    let linesHTML = '';
    // Mũi tên định nghĩa trong SVG
    linesHTML += `
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#b2bec3" />
            </marker>
             <marker id="arrowhead-active" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#e17055" />
            </marker>
             <marker id="arrowhead-path" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#fdcb6e" />
            </marker>
        </defs>
    `;

    for (let u = 0; u < numNodes; u++) {
        // Sắp xếp các cạnh để vẽ thứ tự đẹp
        dagAdj[u].sort((a,b) => a-b);
        
        for (let v of dagAdj[u]) {
            // Cộng 25 để lấy tâm node (vì node size = 50x50)
            let x1 = dagNodes[u].x + 25; 
            let y1 = dagNodes[u].y + 25;
            let x2 = dagNodes[v].x + 25; 
            let y2 = dagNodes[v].y + 25;
            
            linesHTML += `<line id="dag-edge-${u}-${v}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" 
                stroke="#b2bec3" stroke-width="2" marker-end="url(#arrowhead)" />`;
        }
    }

    container.innerHTML = `
        <div class="dag-layout">
            <svg class="dag-svg-layer">${linesHTML}</svg>
            ${nodesHTML}
            <div id="dag-info" class="dag-info-box">
                Đã tạo DAG cân bằng.<br>Bài toán: Tìm đường đi dài nhất (Longest Path).
            </div>
        </div>
    `;
    
    // Lưu thứ tự Topo (chính là thứ tự layer từ trái qua phải)
    dagTopoOrder = [];
    layers.forEach(l => dagTopoOrder.push(...l));
}
// --- BIẾN TOÀN CỤC SEGMENT TREE ---
let stArr = [];      // Mảng ban đầu   // Mảng lưu giá trị cây (Sum/Min/Max)
let stNodes = [];    // Lưu tọa độ để vẽ dây {x, y, id}
let stLevels = 0;    // Độ sâu của cây

// ==========================================
// 13. DP - FROG JUMP (GỌN GÀNG VỪA KHUNG)
// ==========================================
function generateFrogUI() {
    const container = document.getElementById('visualizer-container');
    container.innerHTML = '';
    
    const n = 10; 
    // Random giá trị (vẫn cho số lớn thoải mái để tính toán hay)
    frogHeights = Array.from({length: n}, () => Math.floor(Math.random() * 90) + 10); 
    
    const maxVal = Math.max(...frogHeights);
    
    // --- ĐIỂM QUAN TRỌNG: GIẢM CHIỀU CAO MAX ---
    // 180px là chiều cao cột tối đa. 
    // Cộng thêm con ếch ngồi lên thì tổng thể khoảng 220px -> Không bao giờ bị đụng trần.
    const maxPixelHeight = 180; 
    // ------------------------------------------

    frogDP = new Array(n).fill(Infinity);
    frogTrace = new Array(n).fill(-1);

    let barsHTML = frogHeights.map((h, i) => {
        let pixelH = (h / maxVal) * maxPixelHeight;
        if (pixelH < 40) pixelH = 40; // Chiều cao tối thiểu để chứa số

        return `
        <div class="frog-col-wrapper">
            <div id="frog-bar-${i}" class="frog-bar" style="height: ${pixelH}px;">
                <span class="frog-bar-val">${h}</span>
            </div>
            <div class="frog-idx">Đá ${i}</div>
        </div>
        `;
    }).join('');

    let dpHTML = frogDP.map((val, i) => `
        <div id="frog-dp-${i}" class="frog-dp-box">
            <span class="idx">${i}</span>
            <span class="val" id="frog-dp-val-${i}">∞</span>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="frog-layout">
            <div class="frog-chart-area">
                ${barsHTML}
                <div id="the-frog" class="frog-icon">🐸</div>
            </div>
            <div class="frog-table-area">
                <div class="frog-title">Chi phí năng lượng (DP)</div>
                <div class="frog-grid">${dpHTML}</div>
            </div>
            <div id="frog-info" class="frog-log">
                Đã tạo dữ liệu.<br>Ếch đã sẵn sàng nhảy!
            </div>
        </div>
    `;
    
    updateFrogPosition(0);
}
// Hàm phụ: Di chuyển con ếch đến cột i
function updateFrogPosition(idx) {
    const frog = document.getElementById('the-frog');
    const bar = document.getElementById(`frog-bar-${idx}`);
    if(frog && bar) {
        // Tính toán vị trí để đặt ếch lên đỉnh cột
        const rect = bar.getBoundingClientRect();
        const parentRect = bar.closest('.frog-chart-area').getBoundingClientRect();
        
        // Căn giữa cột và nằm trên đỉnh
        const left = (rect.left - parentRect.left) + (rect.width / 2) - 15; // Trừ nửa width ếch
        const bottom = rect.height + 10; // Cách đỉnh 10px
        
        frog.style.left = `${left}px`;
        frog.style.bottom = `${bottom}px`;
    }
}
// ==========================================
// 12. DP - LIS (GIAO DIỆN HYBRID CẢI TIẾN)
// ==========================================
function generateLISUI() {
    const container = document.getElementById('visualizer-container');
    container.innerHTML = '';
    
    // 1. Tạo mảng ngẫu nhiên (khoảng 15 phần tử cho đẹp)
    const n = 15;
    lisArr = Array.from({length: n}, () => Math.floor(Math.random() * 40) + 5); // Giá trị 5-45
    lisDP = new Array(n).fill(1); 
    lisTrace = new Array(n).fill(-1);

    // 2. Tạo HTML cho Biểu đồ cột (Chart)
    let barsHTML = lisArr.map((val, i) => `
        <div id="lis-bar-${i}" class="lis-bar" style="height: ${val * 4}px;">
            <div class="lis-bar-label">${val}</div>
        </div>
    `).join('');

    // 3. Tạo HTML cho Bảng DP (Grid)
    let nodesHTML = lisDP.map((val, i) => `
        <div id="lis-node-${i}" class="lis-node">
            <span class="idx">${i}</span>
            <span class="val" id="lis-val-${i}">1</span>
        </div>
    `).join('');

    // 4. Render Layout
    container.innerHTML = `
        <div class="lis-layout">
            <div class="lis-chart-area">
                ${barsHTML}
            </div>

            <div class="lis-table-area">
                <div class="lis-table-title">Bảng Quy Hoạch Động (DP[i]: Độ dài chuỗi tăng kết thúc tại i)</div>
                <div class="lis-grid">
                    ${nodesHTML}
                </div>
            </div>

            <div style="height: 100px; background: #2d3436; border: 1px solid #636e72; border-radius: 8px; padding: 10px; overflow-y: auto; color: #fdcb6e; font-family: monospace;" id="lis-info">
                Dữ liệu đã tạo. Giá trị ban đầu của DP[i] = 1.
            </div>
        </div>
    `;
}

function drawTreeLines(svgElement) {
    const svgNS = "http://www.w3.org/2000/svg";
    for (let i = 1; i <= 7; i++) {
        const parent = document.getElementById(`tree-node-${i}`);
        const leftChild = document.getElementById(`tree-node-${2*i}`);
        const rightChild = document.getElementById(`tree-node-${2*i+1}`);
        if (parent && leftChild) connectNodes(svgElement, parent, leftChild);
        if (parent && rightChild) connectNodes(svgElement, parent, rightChild);
    }
}
function connectNodes(svg, div1, div2) {
    const containerRect = visualizer.getBoundingClientRect();
    const r1 = div1.getBoundingClientRect();
    const r2 = div2.getBoundingClientRect();
    const x1 = r1.left + r1.width/2 - containerRect.left;
    const y1 = r1.top + r1.height/2 - containerRect.top;
    const x2 = r2.left + r2.width/2 - containerRect.left;
    const y2 = r2.top + r2.height/2 - containerRect.top;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "#9ca3af");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
}
function updateSegCode() {
    const mode = document.getElementById('seg-mode').value;
    const codeBox = document.getElementById('algo-code');
    if(segmentTreeCodes[mode]) {
        codeBox.innerText = segmentTreeCodes[mode];
    }
}
// --- SEGMENT TREE ---
// ==========================================
// CODE LẠI TỪ ĐẦU: SEGMENT TREE (CLEAN VER)
// ==========================================

// Biến toàn cục
let stData = [];    // Mảng dữ liệu gốc
let stTree = [];    // Mảng Heap
let stCoords = {};  // Lưu tọa độ {x, y} của từng node để vẽ dây

// 1. HÀM TẠO GIAO DIỆN
function generateSegmentTreeUI() {
    const container = document.getElementById('visualizer-container');
    
    // Tạo dữ liệu mẫu (8 phần tử là đẹp nhất cho cây cân đối)
    const n = 8;
    stData = Array.from({length: n}, () => Math.floor(Math.random() * 20) + 1);
    stTree = new Array(4 * n).fill(0);
    stCoords = {};
    
    // Build logic ngầm
    buildSegTreeLogic(1, 0, n - 1);

    // Tính toán kích thước
    const canvasHeight = 380;
    const canvasWidth = container.offsetWidth || 800; // Lấy chiều rộng thật của khung
    
    // HTML Strings
    let nodesHTML = '';
    let linesHTML = '';

    // Hàm đệ quy tính tọa độ & tạo HTML
    // StartX: Tọa độ X bắt đầu, Offset: Độ lệch cho con
    function drawNodeRecursive(node, l, r, x, y, offset) {
        // Lưu tọa độ tâm (để vẽ dây) -> Node 40px thì tâm là +20
        stCoords[node] = { x: x + 20, y: y + 20 };

        // HTML Node + Range Label
        nodesHTML += `
            <div id="st-node-${node}" class="st-node" style="left: ${x}px; top: ${y}px;">
                <span id="st-val-${node}">${stTree[node]}</span>
                <div class="st-range">[${l}, ${r}]</div>
            </div>
        `;

        if (l === r) return; // Node lá -> Dừng

        const mid = Math.floor((l + r) / 2);
        
        // Tính tọa độ con
        const nextY = y + 70; // Mỗi level cách nhau 70px
        const nextOffset = offset / 2; // Offset giảm một nửa
        
        const childLeftX = x - offset;
        const childRightX = x + offset;

        // Vẽ dây nối (SVG Line)
        // Từ tâm cha (x+20, y+20) đến tâm con
        linesHTML += `<line id="st-line-${node}-L" x1="${x+20}" y1="${y+20}" x2="${childLeftX+20}" y2="${nextY+20}" stroke="#b2bec3" stroke-width="2" />`;
        linesHTML += `<line id="st-line-${node}-R" x1="${x+20}" y1="${y+20}" x2="${childRightX+20}" y2="${nextY+20}" stroke="#b2bec3" stroke-width="2" />`;

        // Đệ quy
        drawNodeRecursive(2 * node, l, mid, childLeftX, nextY, nextOffset);
        drawNodeRecursive(2 * node + 1, mid + 1, r, childRightX, nextY, nextOffset);
    }

    // Bắt đầu vẽ từ Root
    // Root nằm giữa màn hình (canvasWidth / 2) - nửa node (20px)
    // Offset ban đầu khoảng 1/4 chiều rộng màn hình
    drawNodeRecursive(1, 0, n - 1, (canvasWidth / 2) - 20, 20, canvasWidth / 4.5);

    // Render ra màn hình theo cấu trúc Flexbox mới
    container.innerHTML = `
        <div class="st-container-wrapper">
            <div class="st-canvas">
                <svg class="st-svg">${linesHTML}</svg>
                ${nodesHTML}
            </div>

            <div id="st-log-box" class="st-log-box">
                Sẵn sàng. Mảng ban đầu: [${stData.join(', ')}]
            </div>
        </div>
    `;
}

// Logic Build (giữ nguyên để tính toán)
function buildSegTreeLogic(node, start, end) {
    if (start === end) {
        stTree[node] = stData[start];
    } else {
        const mid = Math.floor((start + end) / 2);
        buildSegTreeLogic(2 * node, start, mid);
        buildSegTreeLogic(2 * node + 1, mid + 1, end);
        stTree[node] = stTree[2 * node] + stTree[2 * node + 1];
    }
}

// 2. HÀM CHẠY VISUALIZER
async function runSegmentTree() {
    // Setup cơ bản
    if(typeof isRunning !== 'undefined' && isRunning) { shouldKill = true; isRunning = false; await sleep(100); }
    const btnRun = document.getElementById('btn-run');
    const btnPause = document.getElementById('btn-pause');
    const logBox = document.getElementById('st-log-box');

    isRunning = true; isPaused = false; shouldKill = false;
    if(btnRun) btnRun.disabled = true;
    if(btnPause) { btnPause.disabled = false; btnPause.innerText = "Tạm dừng"; }

    // Reset Style cũ
    document.querySelectorAll('.st-node').forEach(el => el.className = 'st-node');
    document.querySelectorAll('line').forEach(el => el.setAttribute('stroke', '#b2bec3'));

    // Tạo Query ngẫu nhiên
    const n = stData.length;
    let qs = Math.floor(Math.random() * (n/2));
    let qe = Math.floor(Math.random() * (n/2)) + qs;
    if (qe >= n) qe = n - 1;

    logBox.innerHTML = `Bắt đầu tính tổng đoạn [${qs}, ${qe}]`;
    await sleep(1000);

    // Hàm đệ quy Visual
    async function query(node, l, r, qs, qe) {
        if(shouldKill) return 0;
        while(isPaused) { logBox.innerText = "Đang tạm dừng..."; await sleep(100); }

        let el = document.getElementById(`st-node-${node}`);
        if(el) el.classList.add("st-active"); // Highlight node đang xét

        logBox.innerHTML = `Đang đứng tại Node [${l}, ${r}]...`;
        await sleep(600);

        // Case 1: Ngoài phạm vi
        if (r < qs || l > qe) {
            logBox.innerHTML = `Node [${l}, ${r}] nằm ngoài đoạn [${qs}, ${qe}] → Trả về 0`;
            if(el) {
                el.classList.remove("st-active");
                el.classList.add("st-disabled"); // Làm mờ
            }
            await sleep(600);
            if(el) el.classList.remove("st-disabled");
            return 0;
        }

        // Case 2: Trong phạm vi
        if (l >= qs && r <= qe) {
            logBox.innerHTML = `Node [${l}, ${r}] nằm trọn trong đoạn tìm → Lấy giá trị ${stTree[node]}`;
            if(el) {
                el.classList.remove("st-active");
                el.classList.add("st-visited"); // Xanh lá
            }
            await sleep(1000);
            return stTree[node];
        }

        // Case 3: Giao nhau -> Chia đôi
        const mid = Math.floor((l + r) / 2);
        
        // Highlight dây
        let lineL = document.getElementById(`st-line-${node}-L`);
        let lineR = document.getElementById(`st-line-${node}-R`);
        if(lineL) lineL.setAttribute('stroke', '#0984e3');
        if(lineR) lineR.setAttribute('stroke', '#0984e3');

        logBox.innerHTML = `Giao nhau một phần → Chia xuống 2 con`;
        await sleep(800);

        let p1 = await query(2 * node, l, mid, qs, qe);
        while(isPaused) { await sleep(100); } // Check pause giữa 2 lần gọi
        let p2 = await query(2 * node + 1, mid + 1, r, qs, qe);

        if(el) el.classList.remove("st-active");
        if(lineL) lineL.setAttribute('stroke', '#b2bec3');
        if(lineR) lineR.setAttribute('stroke', '#b2bec3');

        return p1 + p2;
    }

    let total = await query(1, 0, n - 1, qs, qe);

    logBox.innerHTML = `Kết quả: Tổng đoạn [${qs}, ${qe}] = ${total}`;
    logBox.style.backgroundColor = "#55efc4"; // Highlight kết quả bảng log
    
    isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}
//--- PREFIX SUM ---
let ps_Arr = [];
function generatePrefixOnlyUI() {
    const container = document.getElementById('visualizer-container');
    ps_Arr = Array.from({length: 8}, () => Math.floor(Math.random() * 10) + 1);
    container.innerHTML = `
        <div class="pd-container">
            <h3 style="color:#fdcb6e">Prefix Sum (Mảng cộng dồn)</h3>
            <div class="pd-row-wrapper">
                <div class="pd-label-box"><span style="color:#74b9ff">A</span></div>
                <div class="pd-grid">
                    ${ps_Arr.map((v, i) => `<div id="ps-a-${i}" class="pd-cell" style="border-color:#74b9ff">${v}</div>`).join('')}
                </div>
            </div>
            <div style="font-size:24px; color:#b2bec3">⬇️ Cộng dồn ⬇️</div>
            <div class="pd-row-wrapper">
                <div class="pd-label-box"><span style="color:#fdcb6e">S</span></div>
                <div class="pd-grid">
                    <div id="ps-s-head" class="pd-cell" style="border-color:#fdcb6e; background:#636e72">0</div>
                    ${ps_Arr.map((_, i) => `<div id="ps-s-${i}" class="pd-cell" style="border-color:#fdcb6e">?</div>`).join('')}
                </div>
            </div>
            <div id="ps-math" style="margin-top:15px; padding:10px; background:#dfe6e9; color:#2d3436; border-radius:5px;">Sẵn sàng...</div>
        </div>
    `;
}
async function runPrefixOnly() {
    if(isRunning) return;
    isRunning = true;
    const btnPause = document.getElementById('btn-pause');
    const btnRun = document.getElementById('btn-run');
    btnRun.disabled = true;      
    btnPause.disabled = false;    
    btnPause.innerText = "Tạm dừng ⏸"; 
    isPaused = false;          
    let math = document.getElementById('ps-math');
    let currentSum = 0;
    for (let i = 0; i < ps_Arr.length; i++) {
        let val = ps_Arr[i];
        currentSum += val;
        document.getElementById(`ps-a-${i}`).classList.add('hl-blue');
        if (i > 0) document.getElementById(`ps-s-${i-1}`).classList.add('hl-gold');
        math.innerHTML = `S[${i}] = S[${i-1}] + A[${i}] = <b>${currentSum}</b>`;
        await sleep(1000); 
        let cellS = document.getElementById(`ps-s-${i}`);
        cellS.innerText = currentSum;
        cellS.style.color = 'white';
        cellS.classList.add('hl-green');
        await sleep(800); 
        document.getElementById(`ps-a-${i}`).classList.remove('hl-blue');
        if (i > 0) document.getElementById(`ps-s-${i-1}`).classList.remove('hl-gold');
    }
    math.innerHTML = "Hoàn thành!";
    isRunning = false;
    btnRun.disabled = false;
    btnPause.disabled = true;
    btnPause.innerText = "Tạm dừng ⏸";
    btnPause.classList.remove('active-pause');

}
//--- DIFFERENCE ARRAY ---
let da_Arr = []; 
function generateDiffOnlyUI() {
    const container = document.getElementById('visualizer-container');
    da_Arr = Array.from({length: 6}, () => Math.floor(Math.random() * 10) + 1);
    container.innerHTML = `
        <div class="pd-container" style="gap:20px">
            <h3 style="color:#74b9ff">Mối liên hệ: Gốc (A) & Hiệu (D) & Prefix (S)</h3>
            <div class="pd-row-wrapper">
                <div class="pd-label-box">
                    <span style="color:#74b9ff">A</span>
                    <span class="pd-label-sub">Mảng Gốc</span>
                </div>
                <div class="pd-grid">
                    ${da_Arr.map((v, i) => `
                        <div id="da-a-${i}" class="pd-cell" style="border-color:#74b9ff; color:#74b9ff">${v}</div>
                    `).join('')}
                </div>
            </div>

            <div style="font-size:16px; color:#b2bec3">
                ⬇️ Tính Mảng Hiệu: $D[i] = A[i] - A[i-1]$ ⬇️
            </div>

            <div class="pd-row-wrapper">
                <div class="pd-label-box">
                    <span style="color:#ff7675">D</span>
                    <span class="pd-label-sub">Mảng Hiệu</span>
                </div>
                <div class="pd-grid">
                    ${da_Arr.map((_, i) => `
                        <div id="da-d-${i}" class="pd-cell" style="border-color:#ff7675; color:#ff7675">?</div>
                    `).join('')}
                </div>
            </div>

            <div style="font-size:16px; color:#b2bec3; margin-top:10px;">
                ⬇️ Tính Prefix Sum từ A: $S[i] = S[i-1] + A[i]$ ⬇️
            </div>

            <div class="pd-row-wrapper">
                <div class="pd-label-box">
                    <span style="color:#fdcb6e">S</span>
                    <span class="pd-label-sub">Cộng Dồn</span>
                </div>
                <div class="pd-grid">
                    <div id="da-s-head" class="pd-cell" style="border-color:#636e72; background:#2d3436; color:#b2bec3">0</div>
                    ${da_Arr.map((_, i) => `
                        <div id="da-s-${i}" class="pd-cell" style="border-color:#fdcb6e; color:#fdcb6e">?</div>
                    `).join('')}
                </div>
            </div>
            
            <div id="da-math" style="margin-top:15px; padding:15px; background:#dfe6e9; color:#2d3436; border-radius:5px; font-weight:bold; min-width: 300px; text-align: center;">
                Sẵn sàng! Bấm Chạy để xem quá trình tạo D và S từ A.
            </div>
        </div>
    `;
}
// ==========================================
// RUNNER CHO LIS (CÓ TẠM DỪNG/TIẾP TỤC)
// ==========================================
async function runLIS() {
    // 1. Setup nút và biến trạng thái
    if(typeof isRunning !== 'undefined' && isRunning) { shouldKill = true; isRunning = false; await sleep(100); }
    
    const btnRun = document.getElementById('btn-run');
    const btnPause = document.getElementById('btn-pause');
    const infoBox = document.getElementById('lis-info');
    
    if (!lisArr || lisArr.length === 0) { alert("Vui lòng tạo dữ liệu trước!"); return; }
    
    // Reset lại mảng DP và UI
    const n = lisArr.length;
    lisDP = new Array(n).fill(1);
    lisTrace = new Array(n).fill(-1);
    
    for(let i=0; i<n; i++) {
        // Reset cột
        let bar = document.getElementById(`lis-bar-${i}`);
        if(bar) bar.className = "lis-bar";
        // Reset bảng
        let node = document.getElementById(`lis-node-${i}`);
        let valSpan = document.getElementById(`lis-val-${i}`);
        if(node) node.className = "lis-node";
        if(valSpan) valSpan.innerText = "1";
    }

    // Bắt đầu chạy
    isRunning = true; isPaused = false; shouldKill = false;
    if(btnRun) btnRun.disabled = true; 
    if(btnPause) { btnPause.disabled = false; btnPause.innerText = "Tạm dừng"; }

    infoBox.innerHTML = "Bắt đầu tính toán...";
    await sleep(500);

    // --- VÒNG LẶP CHÍNH ---
    for (let i = 1; i < n; i++) {
        if(shouldKill) break;

        // Highlight i (Đang xét) -> Cả cột và bảng đều sáng màu Xanh Dương
        let barI = document.getElementById(`lis-bar-${i}`);
        let nodeI = document.getElementById(`lis-node-${i}`);
        if(barI) barI.classList.add("active-i");
        if(nodeI) nodeI.classList.add("active-i");
        
        infoBox.innerHTML = `Đang xét <b>Index ${i}</b> (Giá trị: ${lisArr[i]})`;
        await sleep(600);

        for (let j = 0; j < i; j++) {
            // --- KIỂM TRA TẠM DỪNG ---
            if(shouldKill) { isRunning = false; if(btnRun) btnRun.disabled=false; return; }
            while(isPaused) { infoBox.innerHTML = "Đang tạm dừng..."; await sleep(100); }
            // -------------------------

            // Highlight j (So sánh) -> Cả cột và bảng sáng màu Cam
            let barJ = document.getElementById(`lis-bar-${j}`);
            let nodeJ = document.getElementById(`lis-node-${j}`);
            if(barJ) barJ.classList.add("active-j");
            if(nodeJ) nodeJ.classList.add("active-j");

            infoBox.innerHTML = `So sánh: A[${j}]=${lisArr[j]} < A[${i}]=${lisArr[i]} ?`;
            await sleep(500);

            if (lisArr[i] > lisArr[j]) {
                // Điều kiện tăng thoả mãn
                if (lisDP[i] < lisDP[j] + 1) {
                    lisDP[i] = lisDP[j] + 1;
                    lisTrace[i] = j;

                    // Hiệu ứng cập nhật thành công (Xanh lá)
                    nodeI.classList.add("success-update");
                    document.getElementById(`lis-val-${i}`).innerText = lisDP[i];
                    
                    infoBox.innerHTML += ` -> <b>Đúng!</b> Cập nhật DP[${i}] = ${lisDP[i]}`;
                    await sleep(800);
                    nodeI.classList.remove("success-update");
                } else {
                    infoBox.innerHTML += ` -> Lớn hơn, nhưng không giúp chuỗi dài hơn (DP[${j}]+1 <= DP[${i}]).`;
                }
            } else {
                infoBox.innerHTML += ` -> <b>Sai!</b> (Không tăng).`;
                // Hiệu ứng sai (nháy đỏ nhẹ ở cột j)
                if(barJ) barJ.style.backgroundColor = "#d63031";
                await sleep(300);
                if(barJ) barJ.style.backgroundColor = ""; // Trả màu class active-j quản lý
            }

            // Bỏ highlight j
            if(barJ) barJ.classList.remove("active-j");
            if(nodeJ) nodeJ.classList.remove("active-j");
            await sleep(200);
        }

        // Bỏ highlight i
        if(barI) barI.classList.remove("active-i");
        if(nodeI) nodeI.classList.remove("active-i");
        await sleep(200);
    }

    // --- TRUY VẾT KẾT QUẢ (Backtrack) ---
    infoBox.innerHTML = "Hoàn tất tính toán. Đang tìm đường đi dài nhất...";
    
    // Tìm max
    let maxLen = 0, maxIdx = 0;
    for(let i=0; i<n; i++) {
        if(lisDP[i] > maxLen) { maxLen = lisDP[i]; maxIdx = i; }
    }

    // Tô màu kết quả (Vàng Gold)
    let curr = maxIdx;
    while(curr !== -1) {
        if(shouldKill) break;
        let b = document.getElementById(`lis-bar-${curr}`);
        let n = document.getElementById(`lis-node-${curr}`);
        
        if(b) b.classList.add("result-trace");
        if(n) n.classList.add("result-trace");
        
        curr = lisTrace[curr];
        await sleep(400);
    }

    infoBox.innerHTML = `<b>Kết quả: Độ dài chuỗi tăng dài nhất = ${maxLen}</b>`;
    isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}
// ==========================================
// RUNNER CHO FROG JUMP (Pause/Resume OK)
// ==========================================
async function runFrog() {
    // 1. Setup điều khiển
    if(typeof isRunning !== 'undefined' && isRunning) { shouldKill = true; isRunning = false; await sleep(100); }
    const btnRun = document.getElementById('btn-run');
    const btnPause = document.getElementById('btn-pause');
    const infoBox = document.getElementById('frog-info');
    
    if (!frogHeights || frogHeights.length === 0) return;
    const n = frogHeights.length;

    // Reset UI
    frogDP = new Array(n).fill(Infinity);
    frogTrace = new Array(n).fill(-1);
    for(let i=0; i<n; i++) {
        let dpBox = document.getElementById(`frog-dp-val-${i}`);
        let bar = document.getElementById(`frog-bar-${i}`);
        if(dpBox) dpBox.innerText = (i===0) ? "0" : "∞";
        if(bar) { bar.style.backgroundColor = ""; bar.style.opacity = "1"; }
        let dpDiv = document.getElementById(`frog-dp-${i}`);
        if(dpDiv) dpDiv.className = "frog-dp-box";
    }

    // Start
    isRunning = true; isPaused = false; shouldKill = false;
    if(btnRun) btnRun.disabled = true; 
    if(btnPause) { btnPause.disabled = false; btnPause.innerText = "Tạm dừng"; }
    
    // Khởi tạo cơ sở: Đá 0 tốn 0 năng lượng
    frogDP[0] = 0;
    updateFrogPosition(0);
    infoBox.innerHTML = "Bắt đầu tại Đá 0. Chi phí = 0.";
    await sleep(800);

    // --- VÒNG LẶP DP ---
    for (let i = 1; i < n; i++) {
        if(shouldKill) break;
        
        // Di chuyển ếch tới i (Đang xét)
        updateFrogPosition(i);
        let barI = document.getElementById(`frog-bar-${i}`);
        let dpI = document.getElementById(`frog-dp-${i}`);
        if(barI) barI.classList.add("active-frog"); // Màu xanh dương
        if(dpI) dpI.classList.add("active-frog");

        infoBox.innerHTML = `Đang tính chi phí đến <b>Đá ${i}</b> (Cao: ${frogHeights[i]})`;
        await sleep(600);

        // -- CÁCH 1: Nhảy từ i-1 --
        // Check Pause
        if(shouldKill) { isRunning=false; if(btnRun) btnRun.disabled=false; return; }
        while(isPaused) { infoBox.innerHTML="Tạm dừng..."; await sleep(100); }

        let cost1 = Infinity;
        let prev1 = i - 1;
        let barPrev1 = document.getElementById(`frog-bar-${prev1}`);
        if(barPrev1) barPrev1.classList.add("compare-frog"); // Màu cam

        let jumpCost1 = Math.abs(frogHeights[i] - frogHeights[prev1]);
        cost1 = frogDP[prev1] + jumpCost1;
        
        infoBox.innerHTML = `Option 1: Từ Đá ${prev1} sang.<br>Phí = DP[${prev1}] + |${frogHeights[i]} - ${frogHeights[prev1]}| = ${frogDP[prev1]} + ${jumpCost1} = <b>${cost1}</b>`;
        await sleep(1000);

        // -- CÁCH 2: Nhảy từ i-2 (nếu có) --
        let cost2 = Infinity;
        let prev2 = i - 2;
        let barPrev2 = null;
        
        if (prev2 >= 0) {
            // Check Pause
            if(shouldKill) { isRunning=false; if(btnRun) btnRun.disabled=false; return; }
            while(isPaused) await sleep(100);

            barPrev2 = document.getElementById(`frog-bar-${prev2}`);
            if(barPrev2) barPrev2.classList.add("compare-frog");

            let jumpCost2 = Math.abs(frogHeights[i] - frogHeights[prev2]);
            cost2 = frogDP[prev2] + jumpCost2;

            infoBox.innerHTML = `Option 2: Từ Đá ${prev2} sang.<br>Phí = DP[${prev2}] + |${frogHeights[i]} - ${frogHeights[prev2]}| = ${frogDP[prev2]} + ${jumpCost2} = <b>${cost2}</b>`;
            await sleep(1000);
        }

        // -- CHỐT KẾT QUẢ --
        if (cost1 <= cost2) {
            frogDP[i] = cost1;
            frogTrace[i] = prev1;
            infoBox.innerHTML = `Chọn Option 1 (Rẻ hơn hoặc bằng).<br>DP[${i}] = ${cost1}`;
        } else {
            frogDP[i] = cost2;
            frogTrace[i] = prev2;
            infoBox.innerHTML = `Chọn Option 2 (Rẻ hơn).<br>DP[${i}] = ${cost2}`;
        }

        // Cập nhật UI kết quả
        let valSpan = document.getElementById(`frog-dp-val-${i}`);
        if(valSpan) valSpan.innerText = frogDP[i];
        if(dpI) dpI.classList.add("success-frog"); // Nháy xanh lá
        await sleep(800);
        if(dpI) dpI.classList.remove("success-frog");

        // Dọn dẹp màu
        if(barI) barI.classList.remove("active-frog");
        if(dpI) dpI.classList.remove("active-frog");
        if(barPrev1) barPrev1.classList.remove("compare-frog");
        if(barPrev2) barPrev2.classList.remove("compare-frog");
    }

    // --- TRUY VẾT ---
    infoBox.innerHTML = "Tính xong. Đang tìm đường đi tối ưu...";
    let curr = n - 1;
    updateFrogPosition(curr); // Ếch nhảy về đích

    while(curr !== -1) {
        if(shouldKill) break;
        let b = document.getElementById(`frog-bar-${curr}`);
        let d = document.getElementById(`frog-dp-${curr}`);
        
        if(b) b.classList.add("trace-frog"); // Màu vàng
        if(d) d.classList.add("trace-frog");
        
        // Vẽ dây nối nếu muốn (tuỳ chọn)
        
        if(curr === 0) break;
        curr = frogTrace[curr];
        await sleep(400);
        // Nhảy lùi về cha để mô phỏng
        updateFrogPosition(curr);
        await sleep(400);
    }

    infoBox.innerHTML = `<b>Hoàn tất! Tổng năng lượng ít nhất = ${frogDP[n-1]}</b>`;
    isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}

async function runDiffOnly() {
    if(isRunning) return;
    isRunning = true;
    const btnPause = document.getElementById('btn-pause');
    const btnRun = document.getElementById('btn-run');
    btnRun.disabled = true;
    btnPause.disabled = false;
    btnPause.innerText = "Tạm dừng ⏸";
    isPaused = false;
    let math = document.getElementById('da-math');
    math.innerHTML = "GIAI ĐOẠN 1: Xây dựng Mảng Hiệu (D) từ A";
    await sleep(1000);
    for(let i=0; i<da_Arr.length; i++) {
        let valA_curr = da_Arr[i];
        let valA_prev = (i === 0) ? 0 : da_Arr[i-1]; 
        let valD = valA_curr - valA_prev;
        let cellA = document.getElementById(`da-a-${i}`);
        let cellA_prev = (i > 0) ? document.getElementById(`da-a-${i-1}`) : null;
        cellA.classList.add('hl-blue'); 
        if(cellA_prev) cellA_prev.classList.add('hl-gold'); 
        math.innerHTML = `D[${i}] = A[${i}] - A[${i-1}] <br> ${valA_curr} - ${valA_prev} = <b>${valD}</b>`;
        await sleep(1000);
        let cellD = document.getElementById(`da-d-${i}`);
        cellD.innerText = valD;
        cellD.style.color = 'white';
        cellD.classList.add('hl-red');
        await sleep(800); 
        cellA.classList.remove('hl-blue');
        if(cellA_prev) cellA_prev.classList.remove('hl-gold');
        cellD.classList.remove('hl-red');
    }
    math.innerHTML = "GIAI ĐOẠN 2: Xây dựng Mảng Cộng Dồn (S) từ A";
    await sleep(1000);
    let currentSum = 0;
    document.getElementById('da-s-head').classList.add('hl-gold');
    for(let i=0; i<da_Arr.length; i++) {
        let valA = da_Arr[i];
        currentSum += valA;
        let cellA = document.getElementById(`da-a-${i}`);
        let cellS_prev = (i === 0) ? document.getElementById('da-s-head') : document.getElementById(`da-s-${i-1}`);
        let cellS_curr = document.getElementById(`da-s-${i}`);
        cellA.classList.add('hl-blue');
        cellS_prev.classList.add('hl-gold');
        let valS_prev = cellS_prev.innerText;
        math.innerHTML = `S[${i}] = S[${i-1}] + A[${i}] <br> ${valS_prev} + ${valA} = <b>${currentSum}</b>`;
        await sleep(1000); 
        cellS_curr.innerText = currentSum;
        cellS_curr.style.color = 'white';
        cellS_curr.classList.add('hl-green'); 
        await sleep(800);
        cellA.classList.remove('hl-blue');
        cellS_prev.classList.remove('hl-gold'); 
        cellS_curr.classList.remove('hl-green');
    }
    math.innerHTML = "Hoàn thành!";
    isRunning = false;
    btnRun.disabled = false;
    btnPause.disabled = true;
    btnPause.innerText = "Tạm dừng ⏸";
    btnPause.classList.remove('active-pause');
}
// --- SÀNG ERATOSTHENES ---
function generateSieveUI() {
    const container = document.getElementById('visualizer-container');
    container.innerHTML = '';
    container.style.flexDirection = "column";
    container.style.justifyContent = "flex-start";
    const title = document.createElement('h3');
    title.innerText = "Tìm số nguyên tố từ 2 đến 100";
    title.style.marginBottom = "15px";
    title.style.color = "white";
    container.appendChild(title);
    const grid = document.createElement('div');
    grid.className = 'sieve-grid';
    grid.id = 'sieve-grid';
    for (let i = 2; i <= 100; i++) {
        const node = document.createElement('div');
        node.className = 'sieve-node';
        node.id = `sieve-num-${i}`;
        node.innerText = i;
        grid.appendChild(node);
    }
    container.appendChild(grid);
    const info = document.createElement('div');
    info.id = 'sieve-info';
    info.style.marginTop = "20px";
    info.style.fontSize = "18px";
    info.style.color = "#fbbf24";
    info.innerText = "Sẵn sàng...";
    container.appendChild(info);
}
async function runSieve() {
    if(isRunning) return;
    isRunning = true;
    shouldKill = false;
    isPaused = false;
    btnRun.disabled = true;
    btnPause.disabled = false;
    const infoBox = document.getElementById('sieve-info');
    const n = 100;
    let isPrime = new Array(n + 1).fill(true);
    for (let p = 2; p * p <= n; p++) {
        if (shouldKill) return;
        if (isPrime[p]) {
            const pNode = document.getElementById(`sieve-num-${p}`);
            pNode.classList.add('current');
            infoBox.innerText = `Đang xét số P = ${p}. Là số nguyên tố!`;
            infoBox.style.color = "#3b82f6";
            await sleep();
            if (shouldKill) return;
            infoBox.innerText = `Loại bỏ các bội số của ${p}: ${2*p}, ${3*p},...`;
            for (let i = p * p; i <= n; i += p) {
                if (shouldKill) return;
                isPrime[i] = false; 
                const multipleNode = document.getElementById(`sieve-num-${i}`);
                multipleNode.classList.add('not-prime');
                multipleNode.style.transform = "scale(0.8)";
                await sleep(delayTime / 2); 
                multipleNode.style.transform = "scale(1)";
            }
            pNode.classList.remove('current');
            pNode.classList.add('prime');
            await sleep();
        }
    }

    // Duyệt lại một lượt để tô màu xanh cho các số nguyên tố còn lại (lớn hơn sqrt(n))
    infoBox.innerText = "Hoàn tất các bước sàng. Tô màu các số còn lại...";
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            const node = document.getElementById(`sieve-num-${i}`);
            if (!node.classList.contains('prime')) {
                node.classList.add('prime');
                await sleep(50); // Hiệu ứng tô dần dần cho đẹp
            }
        }
    }

    infoBox.innerText = "Hoàn thành! Các ô màu xanh lá là số nguyên tố.";
    infoBox.style.color = "#10b981";

    isRunning = false;
    btnRun.disabled = false;
    btnPause.disabled = true;
}
//--- FENWICK TREE (BINARY INDEXED TREE) ---
let fenwickArr = []; 
let fenwickBIT = []; 
function generateFenwickUI() {
    const container = document.getElementById('visualizer-container');
    container.innerHTML = '';
    const n = 8;
    fenwickArr = Array.from({length: n + 1}, () => 0); 
    const randomVals = Array.from({length: n}, () => Math.floor(Math.random() * 10) + 1);
    let html = `
        <div class="bit-container">
            <h3 style="color:#74b9ff; text-align:center">Mô phỏng: Xây dựng BIT & Truy vấn</h3>
            
            <div class="bit-row">
                <div class="bit-label" style="color:#3b82f6">Array A</div>
                ${randomVals.map((v, i) => `
                    <div id="fw-a-${i+1}" class="bit-cell" style="border-color:#3b82f6">
                        <span>0</span>
                        <span class="bit-idx">${(i+1).toString(2).padStart(3,'0')}</span>
                    </div>
                `).join('')}
            </div>

            <div class="bit-row">
                <div class="bit-label" style="color:#8b5cf6">BIT Tree</div>
                ${randomVals.map((v, i) => `
                    <div id="fw-t-${i+1}" class="bit-cell" style="border-color:#8b5cf6">
                        <span>0</span>
                        <span class="bit-idx">Idx: ${i+1}</span>
                    </div>
                `).join('')}
            </div>

            <div id="fw-info" style="margin-top:20px; padding:15px; background:#dfe6e9; color:#2d3436; 
                border-radius:5px; font-weight:bold; text-align: center; min-height: 60px;">
                Dữ liệu mẫu: [${randomVals.join(', ')}].<br>Bấm Chạy để xem quá trình nạp dữ liệu vào BIT.
            </div>
        </div>
    `;
    container.innerHTML = html;
    window.tempFenwickInput = randomVals;
}
function getLowbit(x) {
    return x & -x;
}
async function runFenwick() {
    if(isRunning) return;
    isRunning = true;
    isPaused = false;
    const btnPause = document.getElementById('btn-pause');
    const btnRun = document.getElementById('btn-run');
    btnRun.disabled = true;
    btnPause.disabled = false;
    const info = document.getElementById('fw-info');
    const vals = window.tempFenwickInput;
    const n = vals.length;
    fenwickBIT = new Array(n + 1).fill(0);
    info.innerHTML = "GIAI ĐOẠN 1: Xây dựng cây (Update từng phần tử)";
    await sleep(1000);
    for (let i = 0; i < n; i++) {
        let idx = i + 1;
        let val = vals[i];
        let cellA = document.getElementById(`fw-a-${idx}`);
        cellA.innerHTML = `<span>${val}</span><span class="bit-idx">${idx.toString(2)}</span>`;
        cellA.classList.add('highlight');
        info.innerHTML = `Thêm giá trị <b>${val}</b> tại vị trí <b>${idx}</b>.<br>Cập nhật các nút BIT liên quan (idx += idx & -idx)`;
        await sleep();
        let currentIdx = idx;
        while (currentIdx <= n) {
            let cellTree = document.getElementById(`fw-t-${currentIdx}`);
            cellTree.classList.add('path');
            let oldVal = fenwickBIT[currentIdx];
            fenwickBIT[currentIdx] += val;
            info.innerHTML = `Update BIT[${currentIdx}]: <br> ${oldVal} + ${val} = <b>${fenwickBIT[currentIdx]}</b>`;
            cellTree.innerText = fenwickBIT[currentIdx];
            cellTree.classList.add('highlight'); 
            await sleep(); 
            cellTree.classList.remove('highlight');
            cellTree.classList.remove('path');
            currentIdx += getLowbit(currentIdx);
        }
        cellA.classList.remove('highlight');
        await sleep(delayTime / 2);
    }
    info.innerHTML = "GIAI ĐOẠN 2: Truy vấn mẫu (Tính tổng Prefix)";
    await sleep(1000);
    let queryIdx = 7;
    let sum = 0;
    info.innerHTML = `Tính tổng từ 1 đến ${queryIdx} (Query(${queryIdx}))`;
    for(let k=1; k<=queryIdx; k++) {
        document.getElementById(`fw-a-${k}`).style.borderColor = "#f59e0b"; 
    }
    await sleep();
    while (queryIdx > 0) {
        let cellTree = document.getElementById(`fw-t-${queryIdx}`);
        cellTree.classList.add('highlight');
        let val = fenwickBIT[queryIdx];
        sum += val;
        info.innerHTML = `Cộng BIT[${queryIdx}] (val=${val}) vào tổng.<br>Tổng hiện tại = <b>${sum}</b>.<br>Nhảy lùi: idx -= idx & -idx`;
        await sleep();
        cellTree.classList.remove('highlight');
        queryIdx -= getLowbit(queryIdx);
    }
    info.innerHTML = `KẾT QUẢ: Tổng Prefix(7) = <b>${sum}</b>`;
    info.style.color = "#10b981";
    for(let k=1; k<=8; k++) {
         document.getElementById(`fw-a-${k}`).style.borderColor = "#3b82f6";
    }
    isRunning = false;
    btnRun.disabled = false;
    btnPause.disabled = true;
}
//--- DSU ---
let dsuParent = [];
let dsuSize = []; 
let dsuEdges = []; 
function generateDSUUI() {
    const container = document.getElementById('visualizer-container');
    container.innerHTML = '';
    const n = 8; 
    dsuParent = Array.from({length: n + 1}, (_, i) => i);
    dsuSize = new Array(n + 1).fill(1); 
    dsuEdges = [];
    let edgeSet = new Set();
    while(dsuEdges.length < 6) {
        let u = Math.floor(Math.random() * n) + 1;
        let v = Math.floor(Math.random() * n) + 1;
        if (u === v) continue;
        let key = u < v ? `${u}-${v}` : `${v}-${u}`;
        if (!edgeSet.has(key)) {
            edgeSet.add(key);
            dsuEdges.push([u, v]);
        }
    }
    let html = `
        <div class="dsu-container">
            <h3 style="color:#74b9ff">DSU: Union by Size & Path Compression</h3>
            
            <div class="edge-queue" id="dsu-edges">
                ${dsuEdges.map((e, i) => `<div id="edge-${i}" class="edge-item">Union(${e[0]}, ${e[1]})</div>`).join('')}
            </div>

            <div class="dsu-nodes-area">
                ${Array.from({length: n}, (_, i) => i + 1).map(i => `
                    <div class="dsu-item">
                        <div id="dsu-node-${i}" class="dsu-circle">${i}</div>
                        
                        <div style="font-size:10px; color:#b2bec3;">Parent</div>
                        <div id="dsu-p-${i}" class="dsu-parent-box">${i}</div>
                        
                        <div id="dsu-s-${i}" class="dsu-size-label">Size: 1</div>
                    </div>
                `).join('')}
            </div>

            <div id="dsu-info" style="margin-top:20px; padding:10px; background:#dfe6e9; color:#2d3436; 
                border-radius:5px; font-weight:bold; text-align: center; min-height: 60px; min-width: 300px;">
                Sẵn sàng! Size ban đầu của mỗi tập hợp là 1.
            </div>
        </div>
    `;
    container.innerHTML = html;
}
async function findVisual(u, infoBox, context) {
    let nodeU = document.getElementById(`dsu-node-${u}`);
    let parentBox = document.getElementById(`dsu-p-${u}`);
    nodeU.classList.add('active'); 
    let p = dsuParent[u];
    if (p === u) {
        infoBox.innerHTML = `${context}: Node <b>${u}</b> là GỐC.`;
        nodeU.classList.add('root'); 
        await sleep();
        nodeU.classList.remove('active');
        return u;
    }
    infoBox.innerHTML = `${context}: Node ${u} có cha là ${p}. Tìm tiếp...`;
    parentBox.style.backgroundColor = "#f59e0b"; 
    await sleep();
    parentBox.style.backgroundColor = "#dfe6e9";
    nodeU.classList.remove('active');
    let root = await findVisual(p, infoBox, context);
    if (dsuParent[u] !== root) {
        dsuParent[u] = root; 
        let pBox = document.getElementById(`dsu-p-${u}`);
        pBox.style.backgroundColor = "#ffeaa7"; 
        pBox.innerText = root; 
        await sleep(delayTime * 0.8);
        pBox.style.backgroundColor = "#dfe6e9";
    }
    return root;
}
// ==========================================
// RUNNER CHO DP ON DAG (Pause/Resume OK)
// ==========================================
async function runDAGDP() {
    if(typeof isRunning !== 'undefined' && isRunning) { shouldKill = true; isRunning = false; await sleep(100); }
    
    const btnRun = document.getElementById('btn-run');
    const btnPause = document.getElementById('btn-pause');
    const infoBox = document.getElementById('dag-info');
    
    if (!dagNodes || dagNodes.length === 0) return;

    isRunning = true; isPaused = false; shouldKill = false;
    if(btnRun) btnRun.disabled = true; 
    if(btnPause) { btnPause.disabled = false; btnPause.innerText = "Tạm dừng"; }

    // Reset UI
    dagDP.fill(0);
    dagTrace.fill(-1);
    for(let i=0; i<dagNodes.length; i++) {
        let node = document.getElementById(`dag-node-${i}`);
        let val = document.getElementById(`dag-val-${i}`);
        if(node) { node.className = "dag-node"; }
        if(val) val.innerText = "0";
    }
    // Reset SVG lines
    document.querySelectorAll('.dag-svg-layer line').forEach(l => {
        l.setAttribute('stroke', '#b2bec3');
        l.setAttribute('stroke-width', '2');
        l.setAttribute('marker-end', 'url(#arrowhead)');
    });

    infoBox.innerHTML = "Duyệt theo thứ tự Topo (Trái -> Phải)...";
    await sleep(800);

    // --- LOOP CHÍNH ---
    for (let u of dagTopoOrder) {
        if(shouldKill) break;
        
        let nodeU = document.getElementById(`dag-node-${u}`);
        if(nodeU) nodeU.classList.add("dag-active");
        
        infoBox.innerHTML = `Đang xét <b>Node ${u}</b> (Giá trị hiện tại: ${dagDP[u]})`;
        await sleep(600);

        for (let v of dagAdj[u]) {
            if(shouldKill) { isRunning=false; if(btnRun) btnRun.disabled=false; return; }
            while(isPaused) { infoBox.innerHTML = "Đang tạm dừng..."; await sleep(100); }

            let edge = document.getElementById(`dag-edge-${u}-${v}`);
            let nodeV = document.getElementById(`dag-node-${v}`);
            
            if(edge) {
                edge.setAttribute('stroke', '#e17055'); 
                edge.setAttribute('stroke-width', '4');
                edge.setAttribute('marker-end', 'url(#arrowhead-active)');
            }
            if(nodeV) nodeV.classList.add("dag-neighbor");

            infoBox.innerHTML = `Kiểm tra cạnh ${u} → ${v}.<br>DP[${v}] (${dagDP[v]}) < DP[${u}]+1 (${dagDP[u]+1}) ?`;
            await sleep(800);

            if (dagDP[v] < dagDP[u] + 1) {
                dagDP[v] = dagDP[u] + 1;
                dagTrace[v] = u;
                
                let valV = document.getElementById(`dag-val-${v}`);
                if(valV) valV.innerText = dagDP[v];
                
                nodeV.classList.remove("dag-neighbor");
                nodeV.classList.add("dag-finished");
                infoBox.innerHTML += ` -> <b>Cập nhật!</b>`;
                await sleep(800);
                nodeV.classList.remove("dag-finished");
            } else {
                infoBox.innerHTML += ` -> Không cập nhật.`;
            }

            // Trả màu dây
            if(edge) {
                edge.setAttribute('stroke', '#b2bec3'); 
                edge.setAttribute('stroke-width', '2');
                edge.setAttribute('marker-end', 'url(#arrowhead)');
            }
            if(nodeV) nodeV.classList.remove("dag-neighbor");
            await sleep(300);
        }

        if(nodeU) {
            nodeU.classList.remove("dag-active");
            nodeU.classList.add("dag-finished");
        }
        await sleep(400);
    }

    // --- TRUY VẾT ---
    infoBox.innerHTML = "Hoàn tất. Tìm đường đi dài nhất (Màu vàng)...";
    
    let maxLen = -1, endNode = -1;
    for(let i=0; i<dagNodes.length; i++) {
        if(dagDP[i] > maxLen) { maxLen = dagDP[i]; endNode = i; }
    }

    let curr = endNode;
    while(curr !== -1) {
        if(shouldKill) break;
        let node = document.getElementById(`dag-node-${curr}`);
        if(node) node.classList.add("dag-path");

        let prev = dagTrace[curr];
        if (prev !== -1) {
            let edge = document.getElementById(`dag-edge-${prev}-${curr}`);
            if(edge) {
                edge.setAttribute('stroke', '#fdcb6e');
                edge.setAttribute('stroke-width', '5');
                // Đổi đầu mũi tên sang màu vàng
                edge.setAttribute('marker-end', 'url(#arrowhead-path)');
            }
        }
        curr = prev;
        await sleep(500);
    }

    infoBox.innerHTML = `<b>Kết quả: Đường đi dài nhất = ${maxLen} (Kết thúc ở Node ${endNode})</b>`;
    isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}
// --- BIẾN TOÀN CỤC CHO LCS ---
let lcsStr1 = "";
let lcsStr2 = "";
let lcsTable = []; // Mảng 2 chiều lưu giá trị

// --- HÀM TẠO GIAO DIỆN LCS ---
function generateLCSUI() {
    const container = document.getElementById('visualizer-container');
    
    // 1. Tạo chuỗi ngẫu nhiên
    const chars = "ABCDEF"; 
    // Tạo chuỗi ngắn (6-8 ký tự) để bảng không bị quá to
    lcsStr1 = Array.from({length: 7}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    lcsStr2 = Array.from({length: 6}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    
    const rows = lcsStr1.length + 2; // +1 cho tiêu đề, +1 cho hàng rỗng 0
    const cols = lcsStr2.length + 2;

    // 2. Tạo HTML Grid
    // Header dòng đầu: Rỗng, Rỗng, Ký tự Str2...
    let gridHTML = '';
    
    // Hàng tiêu đề Str2
    gridHTML += `<div class="dp-header-cell"></div><div class="dp-header-cell">Ø</div>`;
    for(let c of lcsStr2) gridHTML += `<div class="dp-header-cell">${c}</div>`;

    // Các hàng dữ liệu
    for(let i = 0; i <= lcsStr1.length; i++) {
        // Cột tiêu đề Str1 (bên trái)
        let rowLabel = (i === 0) ? "Ø" : lcsStr1[i-1];
        gridHTML += `<div class="dp-header-cell">${rowLabel}</div>`;
        
        // Các ô dữ liệu
        for(let j = 0; j <= lcsStr2.length; j++) {
            gridHTML += `<div id="lcs-cell-${i}-${j}" class="dp-cell">0</div>`;
        }
    }

    container.innerHTML = `
        <div class="dp-2d-layout">
            <div style="text-align:center; color:white; font-weight:bold;">
                Chuỗi 1: <span style="color:#fdcb6e">${lcsStr1}</span> &nbsp;|&nbsp; 
                Chuỗi 2: <span style="color:#fdcb6e">${lcsStr2}</span>
            </div>
            <div class="dp-matrix-area">
                <div class="dp-matrix" style="grid-template-columns: repeat(${cols}, 40px);">
                    ${gridHTML}
                </div>
            </div>
            <div id="lcs-info" class="frog-log"> Đã tạo bảng LCS. Hàng/Cột Ø đại diện cho chuỗi rỗng.
            </div>
        </div>
    `;
}

// --- RUNNER LCS ---
async function runLCS() {
    if(typeof isRunning !== 'undefined' && isRunning) { shouldKill = true; isRunning = false; await sleep(100); }
    const btnRun = document.getElementById('btn-run');
    const btnPause = document.getElementById('btn-pause');
    const infoBox = document.getElementById('lcs-info');

    isRunning = true; isPaused = false; shouldKill = false;
    if(btnRun) btnRun.disabled = true; 
    if(btnPause) { btnPause.disabled = false; btnPause.innerText = "Tạm dừng"; }

    const m = lcsStr1.length;
    const n = lcsStr2.length;
    lcsTable = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Reset UI
    document.querySelectorAll('.dp-cell').forEach(el => {
        el.className = 'dp-cell'; el.innerText = '0';
    });

    // --- DP LOOP ---
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if(shouldKill) { isRunning=false; if(btnRun) btnRun.disabled=false; return; }
            while(isPaused) { infoBox.innerHTML = "Đang tạm dừng..."; await sleep(100); }

            let cell = document.getElementById(`lcs-cell-${i}-${j}`);
            cell.classList.add("dp-active");
            
            let char1 = lcsStr1[i-1];
            let char2 = lcsStr2[j-1];

            infoBox.innerHTML = `So sánh: '${char1}' vs '${char2}'`;
            await sleep(500);

            if (char1 === char2) {
                // Trường hợp bằng nhau -> Lấy chéo + 1
                let diagCell = document.getElementById(`lcs-cell-${i-1}-${j-1}`);
                if(diagCell) diagCell.classList.add("dp-match"); // Xanh lá
                
                lcsTable[i][j] = lcsTable[i-1][j-1] + 1;
                cell.innerText = lcsTable[i][j];
                
                infoBox.innerHTML += ` -> <b>Khớp!</b> = Chéo góc (${lcsTable[i-1][j-1]}) + 1`;
                await sleep(800);
                if(diagCell) diagCell.classList.remove("dp-match");
            } else {
                // Trường hợp khác nhau -> Max(Trên, Trái)
                let topCell = document.getElementById(`lcs-cell-${i-1}-${j}`);
                let leftCell = document.getElementById(`lcs-cell-${i}-${j-1}`);
                
                if(topCell) topCell.classList.add("dp-compare"); // Cam
                if(leftCell) leftCell.classList.add("dp-compare");

                let valTop = lcsTable[i-1][j];
                let valLeft = lcsTable[i][j-1];
                lcsTable[i][j] = Math.max(valTop, valLeft);
                cell.innerText = lcsTable[i][j];

                infoBox.innerHTML += ` -> Khác nhau. Max(Trên=${valTop}, Trái=${valLeft})`;
                await sleep(800);
                
                if(topCell) topCell.classList.remove("dp-compare");
                if(leftCell) leftCell.classList.remove("dp-compare");
            }
            
            cell.classList.remove("dp-active");
        }
    }

    // --- TRUY VẾT ---
    infoBox.innerHTML = "Hoàn tất bảng. Truy vết tìm chuỗi...";
    let i = m, j = n;
    let pathStr = "";
    
    while (i > 0 && j > 0) {
        if(shouldKill) break;
        let cell = document.getElementById(`lcs-cell-${i}-${j}`);
        cell.classList.add("dp-result"); // Màu vàng

        if (lcsStr1[i-1] === lcsStr2[j-1]) {
            pathStr = lcsStr1[i-1] + pathStr;
            i--; j--;
            infoBox.innerHTML = `Ký tự '${lcsStr1[i]}' khớp -> Thêm vào kết quả. Đi chéo về [${i},${j}]`;
        } else if (lcsTable[i-1][j] > lcsTable[i][j-1]) {
            i--;
            infoBox.innerHTML = `Đi lên trên [${i},${j}] (Giá trị lớn hơn)`;
        } else {
            j--;
            infoBox.innerHTML = `Đi sang trái [${i},${j}]`;
        }
        await sleep(500);
    }

    infoBox.innerHTML = `<b>Kết quả LCS: "${pathStr}" (Độ dài: ${pathStr.length})</b>`;
    isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}
async function runDSU() {
    if(isRunning) return;
    isRunning = true;
    isPaused = false;
    const btnPause = document.getElementById('btn-pause');
    const btnRun = document.getElementById('btn-run');
    btnRun.disabled = true;
    btnPause.disabled = false;
    const info = document.getElementById('dsu-info');
    for (let i = 0; i < dsuEdges.length; i++) {
        let [u, v] = dsuEdges[i];
        document.querySelectorAll('.edge-item').forEach(e => e.classList.remove('current'));
        document.getElementById(`edge-${i}`).classList.add('current');
        info.innerHTML = `Lệnh: <b>Union(${u}, ${v})</b>`;
        await sleep(800);
        let rootU = await findVisual(u, info, `Find(${u})`);
        document.getElementById(`dsu-node-${rootU}`).classList.add('root');
        await sleep(500);
        let rootV = await findVisual(v, info, `Find(${v})`);
        document.getElementById(`dsu-node-${rootV}`).classList.add('root');
        await sleep(500);
        if (rootU !== rootV) {
            let sizeU = dsuSize[rootU];
            let sizeV = dsuSize[rootV];
            info.innerHTML = `So sánh Size: <br>Gốc ${rootU} (Size ${sizeU}) vs Gốc ${rootV} (Size ${sizeV})`;
            let lblSizeU = document.getElementById(`dsu-s-${rootU}`);
            let lblSizeV = document.getElementById(`dsu-s-${rootV}`);
            lblSizeU.style.color = "red";
            lblSizeV.style.color = "red";
            await sleep(1500);
            if (sizeU < sizeV) {
                info.innerHTML = `Size(${rootU}) < Size(${rootV}) <br> 👉 Đổi chỗ để gắn cây nhỏ (${rootU}) vào cây lớn (${rootV}).`;
                [rootU, rootV] = [rootV, rootU]; 
                [lblSizeU, lblSizeV] = [lblSizeV, lblSizeU]; 
                await sleep(1500);
            }
            info.innerHTML = `Gắn Gốc nhỏ <b>${rootV}</b> vào Gốc lớn <b>${rootU}</b>`;
            dsuParent[rootV] = rootU;
            let pBoxV = document.getElementById(`dsu-p-${rootV}`);
            pBoxV.style.backgroundColor = "#fab1a0"; 
            pBoxV.innerText = rootU;             
            dsuSize[rootU] += dsuSize[rootV];            
            lblSizeU.innerText = `Size: ${dsuSize[rootU]}`;
            lblSizeU.classList.add('size-up'); 
            await sleep(1500);            // Dọn dẹp
            pBoxV.style.backgroundColor = "#dfe6e9";
            lblSizeU.classList.remove('size-up');
            lblSizeU.style.color = "#fd79a8";
            lblSizeV.style.color = "#fd79a8";
        } else {
            info.innerHTML = `Trùng gốc (${rootU}). Bỏ qua.`;
            document.getElementById(`edge-${i}`).style.textDecoration = "line-through";
            await sleep(1000);
        }
        document.querySelectorAll('.dsu-circle').forEach(el => el.classList.remove('root'));
    }
    info.innerHTML = "Hoàn thành! Các cây đã được tối ưu độ cao.";
    info.style.color = "#10b981";
    isRunning = false;
    btnRun.disabled = false;
    btnPause.disabled = true;
}
// --- TARJAN'S ALGORITHM (SCC) ---
let tarjanAdj = [];
let tarjanIds = [];
let tarjanLow = [];
let tarjanOnStack = [];
let tarjanStack = [];
let tarjanIdCounter = 0;
let tarjanSCCCount = 0;
const nodePositions = [
    {x: 250, y: 30},  
    {x: 420, y: 130},
    {x: 420, y: 300}, 
    {x: 250, y: 400}, 
    {x: 80,  y: 300}, 
    {x: 80,  y: 130},
    {x: 250, y: 200}  
];
function generateTarjanUI() {
    const container = document.getElementById('visualizer-container');
    container.innerHTML = '';
    const n = 7;
    tarjanAdj = [
        [1],     
        [2],      
        [0],    
        [4, 2],   
        [5],     
        [4, 6],    
        [0]       
    ];
    const customStyle = `
        <style>
            .tarjan-layout {
                display: flex;
                width: 100%;
                gap: 10px; /* Khoảng cách giữa Graph và Stack nhỏ lại */
                justify-content: center;
                align-items: flex-start;
            }
            .graph-area {
                position: relative;
                width: 70%;       /* Tăng độ rộng phần Graph */
                height: 500px;    /* Tăng chiều cao bảng */
                background: #2d3436;
                border: 1px solid #444;
                border-radius: 8px;
                overflow: hidden;
            }
            .graph-node {
                position: absolute;
                width: 30px;        /* Node nhỏ hơn (Cũ: 36px) */
                height: 30px;
                line-height: 26px;  /* Căn giữa chữ dọc */
                border-radius: 50%;
                background-color: #636e72;
                color: white;
                text-align: center;
                font-weight: bold;
                font-size: 11px;    /* Chữ trong node nhỏ lại */
                border: 2px solid #b2bec3;
                z-index: 10;
                transition: background-color 0.3s, border-color 0.3s;
            }
            .node-label {
                position: absolute;
                top: 34px;          /* Vị trí sát node hơn */
                left: 50%;
                transform: translateX(-50%);
                width: 70px;
                font-size: 9px;     /* Chữ thông số cực nhỏ */
                color: #dfe6e9;
                text-align: center;
                line-height: 1.1;
                background: rgba(0,0,0,0.4);
                padding: 1px;
                border-radius: 3px;
                pointer-events: none;
            }
            .stack-viz {
                display: flex;
                flex-direction: column-reverse;
                height: 350px;      /* Stack dài ra */
                overflow-y: auto;
                background: #2d3436;
                border: 1px solid #636e72;
                padding: 4px;
                border-radius: 5px;
            }
            .stack-item {
                background: #fdcb6e;
                color: #2d3436;
                padding: 2px 5px;   /* Padding mỏng lại */
                margin-top: 2px;
                border-radius: 2px;
                text-align: center;
                font-weight: bold;
                font-size: 10px;    /* Chữ trong Stack nhỏ lại */
                border: 1px solid #e17055;
            }
            .graph-svg {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
            }
        </style>
    `;

    let html = customStyle + `
        <div class="tarjan-layout">
            <div class="graph-area" id="graph-area">
                <svg class="graph-svg" id="graph-svg">
                    <defs>
                        <marker id="arrowhead" markerWidth="8" markerHeight="6" 
                        refX="18" refY="3" orient="auto">
                            <polygon points="0 0, 8 3, 0 6" fill="#b2bec3" />
                        </marker>
                    </defs>
                </svg>
                
                ${nodePositions.map((pos, i) => `
                    <div id="tj-node-${i}" class="graph-node" style="left:${pos.x - 15}px; top:${pos.y - 15}px;">
                        ${i}
                        <div id="tj-lbl-${i}" class="node-label">id: -<br>low: -</div>
                    </div>
                `).join('')}
            </div>

            <div style="width: 25%; display:flex; flex-direction:column; gap:5px;">
                <h4 style="color:white; text-align:center; margin: 0; font-size: 12px;">Stack</h4>
                <div id="tarjan-stack-viz" class="stack-viz"></div>
                <div id="tj-info" style="color: #fdcb6e; font-size:11px; background: #2d3436; padding:5px; border-radius:5px; min-height: 50px;">
                    Sẵn sàng...
                </div>
            </div>
        </div>
    `;
    container.innerHTML = html;

    const svg = document.getElementById('graph-svg');
    for (let u = 0; u < n; u++) {
        for (let v of tarjanAdj[u]) {
            drawLine(u, v, svg);
        }
    }
}
function drawLine(u, v, svg) {
    const p1 = nodePositions[u];
    const p2 = nodePositions[v];
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', p1.x);
    line.setAttribute('y1', p1.y);
    line.setAttribute('x2', p2.x);
    line.setAttribute('y2', p2.y);
    line.setAttribute('stroke', '#b2bec3');
    line.setAttribute('stroke-width', '1.5'); 
    line.setAttribute('marker-end', 'url(#arrowhead)');
    line.id = `line-${u}-${v}`;
    svg.appendChild(line);
}
async function dfsTarjan(at, info) {
    if(typeof shouldKill !== 'undefined' && shouldKill) return;
    tarjanStack.push(at);
    tarjanOnStack[at] = true;
    tarjanIds[at] = tarjanLow[at] = tarjanIdCounter++;
    const nodeUI = document.getElementById(`tj-node-${at}`);
    const lblUI = document.getElementById(`tj-lbl-${at}`);
    if(nodeUI) {
        nodeUI.style.backgroundColor = "#3b82f6"; 
        nodeUI.style.color = "white";
    }
    if(lblUI) lblUI.innerText = `id: ${tarjanIds[at]} | low: ${tarjanLow[at]}`;
    const stackContainer = document.getElementById('tarjan-stack-viz');
    const stackItem = document.createElement('div');
    stackItem.className = 'stack-item';
    stackItem.id = `st-item-${at}`;
    stackItem.innerText = `Node ${at}`;
    stackContainer.appendChild(stackItem);
    info.innerText = `Thăm ${at}. id=${tarjanIds[at]}. Push Stack.`;
    if(typeof sleep === 'function') await sleep();
    for (let to of tarjanAdj[at]) {
        if(typeof shouldKill !== 'undefined' && shouldKill) return;
        const line = document.getElementById(`line-${at}-${to}`);
        if(line) {
            line.setAttribute('stroke', '#fdcb6e'); 
            line.setAttribute('stroke-width', '3');
        }
        if (tarjanIds[to] === -1) {
            info.innerText = `${to} chưa thăm. DFS(${to})...`;
            if(typeof sleep === 'function') await sleep();
            if(line) { line.setAttribute('stroke', '#b2bec3'); line.setAttribute('stroke-width', '1.5'); }
            await dfsTarjan(to, info);            
            info.innerText = `Về ${at}. low[${at}]=min(${tarjanLow[at]}, low[${to}]->${tarjanLow[to]})`;
            tarjanLow[at] = Math.min(tarjanLow[at], tarjanLow[to]);
            if(lblUI) {
                lblUI.innerText = `id: ${tarjanIds[at]} | low: ${tarjanLow[at]}`;
                lblUI.style.color = "#ffeaa7";
            }
            if(typeof sleep === 'function') await sleep();
        } else if (tarjanOnStack[to]) {
            info.innerText = `${to} trong Stack. low[${at}]=min(low, id[${to}])`;
            if(typeof sleep === 'function') await sleep();
            if(line) { line.setAttribute('stroke', '#b2bec3'); line.setAttribute('stroke-width', '1.5'); }
            tarjanLow[at] = Math.min(tarjanLow[at], tarjanIds[to]);
            if(lblUI) lblUI.innerText = `id: ${tarjanIds[at]} | low: ${tarjanLow[at]}`;
            if(typeof sleep === 'function') await sleep();
        } else {
             if(line) { line.setAttribute('stroke', '#b2bec3'); line.setAttribute('stroke-width', '1.5'); }
        }
    }
    if (tarjanIds[at] === tarjanLow[at]) {
        info.innerText = `SCC Root ${at}! Pop Stack...`;
        info.style.color = "#55efc4";
        await sleep(1000);
        const sccColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        tarjanSCCCount++;
        while (tarjanStack.length > 0) {
            let node = tarjanStack.pop();
            tarjanOnStack[node] = false;
            let sItem = document.getElementById(`st-item-${node}`);
            if(sItem) sItem.remove();
            let nDiv = document.getElementById(`tj-node-${node}`);
            if(nDiv) {
                nDiv.style.backgroundColor = sccColor;
                nDiv.style.borderColor = "white";
                nDiv.style.fontSize = "9px";
                nDiv.innerHTML = `${node}<br>SCC${tarjanSCCCount}`;
                nDiv.style.lineHeight = "12px"; 
            }
            if (node === at) break;
        }
        info.innerText = `Xong SCC ${tarjanSCCCount}`;
        info.style.color = "#fdcb6e";
        await sleep(1000);
    }
}
async function runTarjan() {
    if(typeof isRunning !== 'undefined' && isRunning) return;
    if(typeof isRunning !== 'undefined') isRunning = true;
    if(typeof shouldKill !== 'undefined') shouldKill = false;
    if(typeof isPaused !== 'undefined') isPaused = false;
    const btnPause = document.getElementById('btn-pause');
    const btnRun = document.getElementById('btn-run');
    if(btnRun) btnRun.disabled = true;
    if(btnPause) btnPause.disabled = false;
    const info = document.getElementById('tj-info');
    const n = 7;
    tarjanIds = new Array(n).fill(-1);
    tarjanLow = new Array(n).fill(0);
    tarjanOnStack = new Array(n).fill(false);
    tarjanStack = [];
    tarjanIdCounter = 0;
    tarjanSCCCount = 0;
    for (let i = 0; i < n; i++) {
        if(typeof shouldKill !== 'undefined' && shouldKill) break;
        if (tarjanIds[i] === -1) {
            await dfsTarjan(i, info);
        }
    }
    if(typeof shouldKill !== 'undefined' && !shouldKill) {
        info.innerText = `Tìm thấy ${tarjanSCCCount} SCC.`;
        info.style.color = "#10b981";
    }
    if(typeof isRunning !== 'undefined') isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}
//--- KRUSKAL'S ALGORITHM ---
let kruEdges = [];      
let kruNodes = [];      
let kruDSU = [];        
function generateKruskalUI() {
    const container = document.getElementById('visualizer-container');
    container.innerHTML = '';
    const n = 6; 
    kruNodes = [];
    const positions = [
        {x: 100, y: 100}, {x: 300, y: 50}, {x: 500, y: 100},
        {x: 100, y: 350}, {x: 300, y: 400}, {x: 500, y: 350}
    ];
    kruNodes = positions; 
    kruEdges = [];
    const possibleEdges = [
        [0,1], [1,2], [0,3], [3,4], [4,5], [2,5], [1,4], [1,3], [2,4]
    ];    
    possibleEdges.forEach((e, i) => {
        kruEdges.push({
            u: e[0], 
            v: e[1], 
            w: Math.floor(Math.random() * 20) + 1,
            id: i
        });
    });
    let html = `
        <div class="kruskal-layout">
            <div class="kruskal-graph" id="kruskal-graph">
                <svg class="graph-svg" id="kru-svg">
                    </svg>
                ${kruNodes.map((pos, i) => `
                    <div id="kru-node-${i}" class="graph-node" 
                         style="left:${pos.x-15}px; top:${pos.y-15}px; width:30px; height:30px; line-height:26px; font-size:12px; background:#636e72;">
                        ${i}
                    </div>
                `).join('')}
            </div>

            <div class="kruskal-sidebar">
                <div style="color:white; font-weight:bold; text-align:center;">
                    Danh sách cạnh (Sorted)
                </div>
                <div class="edge-list" id="kru-edge-list">
                    </div>
                <div id="kru-info" style="background:#2d3436; color:#fdcb6e; padding:10px; border-radius:5px; font-size:13px; min-height:80px;">
                    Sẵn sàng... Bấm chạy để sắp xếp và duyệt.
                </div>
                <div style="background:#2d3436; color:#10b981; padding:10px; border-radius:5px; text-align:center; font-weight:bold;">
                    MST Cost: <span id="kru-total">0</span>
                </div>
            </div>
        </div>
    `;
    container.innerHTML = html;
    const svg = document.getElementById('kru-svg');
    kruEdges.forEach(edge => {
        drawLineKruskal(edge, svg);
    });  
    renderEdgeList(kruEdges, false);
}
function drawLineKruskal(edge, svg) {
    const p1 = kruNodes[edge.u];
    const p2 = kruNodes[edge.v];
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', p1.x); line.setAttribute('y1', p1.y);
    line.setAttribute('x2', p2.x); line.setAttribute('y2', p2.y);
    line.setAttribute('stroke', '#b2bec3');
    line.setAttribute('stroke-width', '2');
    line.id = `kru-line-${edge.id}`;
    svg.appendChild(line);
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', midX);
    text.setAttribute('y', midY);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('class', 'weight-label');
    text.textContent = edge.w;
    svg.appendChild(text);
}
function renderEdgeList(edges, isSorted) {
    const listDiv = document.getElementById('kru-edge-list');
    listDiv.innerHTML = '';
    edges.forEach(e => {
        const div = document.createElement('div');
        div.className = 'edge-card';
        div.id = `kru-card-${e.id}`;
        div.innerHTML = `<span>${e.u} - ${e.v}</span> <span>w: ${e.w}</span>`;
        listDiv.appendChild(div);
    });
}
function findKruskal(u) {
    if (kruDSU[u] === u) return u;
    return kruDSU[u] = findKruskal(kruDSU[u]);
}
function unionKruskal(u, v) {
    u = findKruskal(u);
    v = findKruskal(v);
    if (u !== v) {
        kruDSU[v] = u;
        return true; 
    }
    return false; 
}
async function runKruskal() {
    if(typeof isRunning !== 'undefined' && isRunning) return;
    isRunning = true;
    shouldKill = false;
    isPaused = false;
    const btnPause = document.getElementById('btn-pause');
    const btnRun = document.getElementById('btn-run');
    if(btnRun) btnRun.disabled = true;
    if(btnPause) btnPause.disabled = false;
    const info = document.getElementById('kru-info');
    const totalSpan = document.getElementById('kru-total');
    let mstCost = 0;
    info.innerHTML = "Bước 1: Sắp xếp các cạnh theo trọng số tăng dần...";
    await sleep(1000);
    kruEdges.sort((a, b) => a.w - b.w);
    renderEdgeList(kruEdges, true); 
    await sleep(1000);
    kruDSU = Array.from({length: 6}, (_, i) => i);
    let edgesCount = 0;
    for (let i = 0; i < kruEdges.length; i++) {
        if(shouldKill) return;
        let edge = kruEdges[i];
        let card = document.getElementById(`kru-card-${edge.id}`);
        let line = document.getElementById(`kru-line-${edge.id}`);
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('active');
        line.setAttribute('stroke', '#3b82f6'); 
        line.setAttribute('stroke-width', '4');
        info.innerHTML = `Xét cạnh <b>${edge.u}-${edge.v}</b> (w=${edge.w}).<br>Kiểm tra chu trình bằng DSU...`;
        await sleep();
        let rootU = findKruskal(edge.u);
        let rootV = findKruskal(edge.v);
        if (rootU !== rootV) {
            unionKruskal(rootU, rootV);
            mstCost += edge.w;
            edgesCount++;
            info.innerHTML = `Gốc khác nhau (${rootU} ≠ ${rootV}) -> <b>CHẤP NHẬN</b>.<br>Thêm vào MST.`;
            card.classList.remove('active');
            card.classList.add('accepted');
            line.setAttribute('stroke', '#10b981'); 
            document.getElementById(`kru-node-${edge.u}`).style.borderColor = "#10b981";
            document.getElementById(`kru-node-${edge.v}`).style.borderColor = "#10b981";
            totalSpan.innerText = mstCost;
        } else {
            info.innerHTML = `Cùng gốc (${rootU}) -> Tạo chu trình -> <b>TỪ CHỐI</b>.`;
            card.classList.remove('active');
            card.classList.add('rejected');
            line.setAttribute('stroke', '#ef4444'); 
            await sleep(delayTime * 0.8);
            line.setAttribute('stroke', '#b2bec3'); 
            line.setAttribute('stroke-width', '1'); 
            line.setAttribute('opacity', '0.3');
        }
        await sleep();
        if (edgesCount === 5) {
            info.innerHTML = "Đã đủ V-1 cạnh. MST hoàn thành sớm!";
            break;
        }
    }
    info.innerHTML = `Hoàn thành! Tổng trọng số MST = <b>${mstCost}</b>`;
    info.style.color = "#10b981";
    isRunning = false;
    btnRun.disabled = false;
    btnPause.disabled = true;
}
//--- DIJKSTRA ---
let djAdj = [];      
let djNodes = [];   
let djDist = [];    
let djParent = [];   
let djOpen = [];     
let djClosed = []; 
const nodeNames = ["A", "B", "C", "D", "E", "F"];
function getPointAtRadius(p1, p2, radius) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    if (dist === 0) return p2; 
    const t = (dist - (radius + 4)) / dist; 
    return { x: p1.x + dx * t, y: p1.y + dy * t };
}
function generateDijkstraUI() {
    const container = document.getElementById('visualizer-container');
    container.innerHTML = '';    
    djNodes = [
        {x: 60,  y: 250}, 
        {x: 200, y: 100}, 
        {x: 200, y: 400}, 
        {x: 400, y: 100}, 
        {x: 400, y: 400},
        {x: 540, y: 250}  
    ];
    const n = 6;
    const nodeNames = ["A", "B", "C", "D", "E", "F"];
    djAdj = Array.from({length: n}, () => []);
    const connections = [
        {u: 0, v: 1}, {u: 0, v: 2}, 
        {u: 1, v: 3}, {u: 1, v: 4}, 
        {u: 2, v: 4},
        {u: 3, v: 5}, {u: 4, v: 5}
    ];
    let edgesHTML = "";
    connections.forEach(pair => {
        let w = Math.floor(Math.random() * 9) + 1; 
        djAdj[pair.u].push({to: pair.v, w: w});
        const p1 = djNodes[pair.u];
        const p2 = djNodes[pair.v];
        const pEnd = getPointAtRadius(p1, p2, 22); 
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        edgesHTML += `
            <g>
                <line id="dj-edge-${pair.u}-${pair.v}" 
                      x1="${p1.x}" y1="${p1.y}" x2="${pEnd.x}" y2="${pEnd.y}" 
                      stroke="#b2bec3" stroke-width="2" marker-end="url(#arrowhead-dj)" />
                <rect x="${midX-10}" y="${midY-12}" width="20" height="20" fill="#2d3436" rx="4" opacity="0.9" />
                <text x="${midX}" y="${midY+5}" text-anchor="middle" fill="#fab1a0" font-weight="bold" font-size="14" style="user-select:none;">${w}</text>
            </g>
        `;
    });
    let nodesHTML = djNodes.map((pos, i) => `
        <g transform="translate(${pos.x}, ${pos.y})">
            <circle id="dj-node-circle-${i}" r="22" fill="#636e72" stroke="#b2bec3" stroke-width="2" />
            
            <text x="0" y="6" text-anchor="middle" fill="white" font-weight="bold" font-size="16" style="pointer-events: none;">${nodeNames[i]}</text>
            
            <g transform="translate(0, -35)">
                <rect x="-16" y="-12" width="32" height="20" rx="4" fill="rgba(0,0,0,0.8)" />
                <text id="dj-dist-txt-${i}" x="0" y="3" text-anchor="middle" fill="#fab1a0" font-size="12" font-weight="bold">∞</text>
            </g>
        </g>
    `).join('');

    container.innerHTML = `
        <div class="dijkstra-layout" style="display: flex; gap: 10px; height: 520px; width: 100%;"> 
            <div class="graph-area" style="flex: 2; height: 100%; background: #2d3436; border-radius: 8px; border: 1px solid #636e72; position: relative;">
                <svg width="100%" height="100%" viewBox="0 0 600 520" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <marker id="arrowhead-dj" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#b2bec3" />
                        </marker>
                    </defs>
                    ${edgesHTML}
                    ${nodesHTML}
                </svg>
            </div>
            <div class="dijkstra-sidebar" style="flex: 1.1; display: flex; flex-direction: column; gap: 8px;">
                <div style="flex: 1.5; background: #2d3436; border: 1px solid #636e72; border-radius: 5px; overflow: hidden; display:flex; flex-direction:column;">
                    <h4 style="color:white; text-align:center; margin: 0; background:#0984e3; padding:8px; font-size:14px;">Data Table</h4>
                    <div style="overflow-y:auto; flex:1;">
                        <table style="width:100%; border-collapse:collapse; color:#dfe6e9; font-size:13px; text-align:center;">
                            <thead style="position: sticky; top: 0; background: #2d3436; border-bottom:1px solid #636e72;">
                                <tr><th>Node</th><th>Dist</th><th>Parent</th></tr>
                            </thead>
                            <tbody>
                                ${djNodes.map((_, i) => `
                                    <tr id="dj-row-${i}" style="border-bottom: 1px solid #444;">
                                        <td style="padding:6px; font-weight:bold;">${nodeNames[i]}</td>
                                        <td id="dj-cell-d-${i}" style="padding:6px;">∞</td>
                                        <td id="dj-cell-p-${i}" style="padding:6px;">-</td>
                                    </tr>`).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style="flex: 1; display:flex; gap:8px;">
                    <div style="flex:1; background: #2d3436; border: 1px solid #636e72; border-radius: 5px; padding:5px; display:flex; flex-direction:column;">
                        <div style="color:#fdcb6e; font-weight:bold; font-size:12px; text-align:center; border-bottom:1px solid #555;">OPEN</div>
                        <div id="dj-open-set" style="color:#dfe6e9; font-size:12px; padding:5px; overflow-y:auto;"></div>
                    </div>
                    <div style="flex:1; background: #2d3436; border: 1px solid #636e72; border-radius: 5px; padding:5px; display:flex; flex-direction:column;">
                        <div style="color:#ff7675; font-weight:bold; font-size:12px; text-align:center; border-bottom:1px solid #555;">CLOSED</div>
                        <div id="dj-closed-set" style="color:#dfe6e9; font-size:12px; padding:5px; overflow-y:auto;"></div>
                    </div>
                </div>
                <div id="dj-info" style="height: 50px; background:#2d3436; color:#fdcb6e; padding:5px; border-radius:5px; font-size:11px; overflow-y: auto; border: 1px solid #636e72;">
                    Layout Hexagon đã chuẩn. Sẵn sàng.
                </div>
            </div>
        </div>
    `;
}
function drawEdgeDijkstra(u, v, w, svg) {
    const p1 = djNodes[u];
    const p2 = djNodes[v];
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', p1.x); line.setAttribute('y1', p1.y);
    line.setAttribute('x2', p2.x); line.setAttribute('y2', p2.y);
    line.setAttribute('stroke', '#b2bec3');
    line.setAttribute('stroke-width', '1.5');
    line.setAttribute('marker-end', 'url(#arrowhead-dj)');
    line.id = `dj-edge-${u}-${v}`;
    svg.appendChild(line);
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', midX);
    text.setAttribute('y', midY - 5); 
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('class', 'dj-weight');
    text.textContent = w;
    svg.appendChild(text);
}
async function runDijkstra() {
    if(typeof isRunning !== 'undefined' && isRunning) {
        shouldKill = true; 
        isRunning = false;
        await sleep(100); 
    }
    const btnRun = document.getElementById('btn-run');
    const btnPause = document.getElementById('btn-pause');
    const n = 6;
    const startNode = 0; 
    const nodeNames = ["A", "B", "C", "D", "E", "F"];
    if (!djAdj || djAdj.length === 0) {
        alert("Chưa có dữ liệu! Vui lòng bấm 'Tạo dữ liệu' trước.");
        return;
    }
    djDist = new Array(n).fill(Infinity);
    djParent = new Array(n).fill(-1);
    djClosed = [];
    djOpen = [];
    djDist[startNode] = 0;
    djOpen.push(startNode);
    for(let i=0; i<n; i++) {
        let circle = document.getElementById(`dj-node-circle-${i}`);
        if(circle) {
            circle.style.fill = "#636e72"; 
            circle.style.stroke = "#b2bec3";
            circle.style.strokeWidth = "2";
        }
        let txt = document.getElementById(`dj-dist-txt-${i}`);
        if(txt) txt.textContent = (i===startNode) ? "0" : "∞";
        let dCell = document.getElementById(`dj-cell-d-${i}`);
        let pCell = document.getElementById(`dj-cell-p-${i}`);
        let row = document.getElementById(`dj-row-${i}`);
        if(dCell) dCell.innerText = (i===startNode) ? "0" : "∞";
        if(pCell) pCell.innerText = "-";
        if(row) { 
            row.style.backgroundColor = ""; 
            row.style.color = "#dfe6e9"; 
            row.style.fontWeight = "normal"; 
        }
    }
    document.querySelectorAll('line[id^="dj-edge-"]').forEach(l => {
        l.setAttribute('stroke', '#b2bec3'); 
        l.setAttribute('stroke-width', '2');
        if(l.parentNode && l.parentNode.parentNode) {
        }
    });
    if(typeof updateSetsUI === "function") updateSetsUI();
    isRunning = true;
    isPaused = false;
    shouldKill = false;
    if(btnRun) btnRun.disabled = true;     
    if(btnPause) {
        btnPause.disabled = false;          
        btnPause.innerText = "Tạm dừng";    
    }
    let infoBox = document.getElementById('dj-info');
    if(infoBox) infoBox.innerHTML = "Bắt đầu thuật toán...";
    await sleep(800);
    while (djOpen.length > 0) {
        if(shouldKill) { 
            isRunning = false; 
            if(btnRun) btnRun.disabled = false; 
            if(btnPause) btnPause.disabled = true;
            return; 
        }
        if(isPaused) { 
            if(infoBox) infoBox.innerHTML = "Đang tạm dừng...";
            await sleep(100); 
            continue; 
        }
        let u = -1;
        let minVal = Infinity;
        let minIdx = -1;
        for (let i = 0; i < djOpen.length; i++) {
            let idx = djOpen[i];
            if (djDist[idx] < minVal) {
                minVal = djDist[idx];
                u = idx;
                minIdx = i;
            }
        }
        if (u === -1) break;
        djOpen.splice(minIdx, 1);
        djClosed.push(u);
        if(typeof updateSetsUI === "function") updateSetsUI();
        let uCircle = document.getElementById(`dj-node-circle-${u}`);
        if(uCircle) uCircle.style.fill = "#0984e3"; 
        let uRow = document.getElementById(`dj-row-${u}`);
        if(uRow) { uRow.style.backgroundColor = "#74b9ff"; uRow.style.color = "#2d3436"; }
        if(infoBox) infoBox.innerHTML = `Đang xét <b>${nodeNames[u]}</b> (Min=${minVal})`;
        await sleep(800);
        if(djAdj[u]) {
            let neighbors = djAdj[u].sort((a,b) => a.to - b.to);
            for (let edge of neighbors) {
                if(shouldKill) { isRunning = false; if(btnRun) btnRun.disabled = false; return; }
                while(isPaused) { await sleep(100); } 
                let v = edge.to;
                let w = edge.w;
                if (!djClosed.includes(v)) {
                    let line = document.getElementById(`dj-edge-${u}-${v}`);
                    if(line) { 
                        line.setAttribute('stroke', '#fdcb6e'); 
                        line.setAttribute('stroke-width', '4'); 
                    }
                    let newDist = djDist[u] + w;
                    if (newDist < djDist[v]) {
                        djDist[v] = newDist;
                        djParent[v] = u;
                        if (!djOpen.includes(v)) djOpen.push(v);
                        if(typeof updateSetsUI === "function") updateSetsUI();
                        let vTxt = document.getElementById(`dj-dist-txt-${v}`);
                        if(vTxt) vTxt.textContent = newDist;
                        document.getElementById(`dj-cell-d-${v}`).innerText = newDist;
                        document.getElementById(`dj-cell-p-${v}`).innerText = nodeNames[u];
                        let vRow = document.getElementById(`dj-row-${v}`);
                        if(vRow) { vRow.style.color = "#00b894"; vRow.style.fontWeight = "bold"; }
                        if(infoBox) infoBox.innerHTML = `Cập nhật <b>${nodeNames[v]}</b>: ${newDist}`;
                        await sleep(delayTime || 500);
                        if(vRow) { vRow.style.color = "#dfe6e9"; vRow.style.fontWeight = "normal"; }
                    }
                    if(line) { line.setAttribute('stroke', '#b2bec3'); line.setAttribute('stroke-width', '2'); }
                }
            }
        }
        if(uCircle) uCircle.style.fill = "#10b981"; 
        if(uRow) { uRow.style.backgroundColor = ""; uRow.style.color = "#10b981"; }
        await sleep(500);
    }
    if(infoBox) infoBox.innerHTML = "Hoàn tất! Vẽ đường đi ngắn nhất...";
    let curr = 5; 
    if(djDist[curr] !== Infinity) {
        let endCircle = document.getElementById(`dj-node-circle-${curr}`);
        if(endCircle) { endCircle.style.stroke = "#e17055"; endCircle.style.strokeWidth = "4"; }
        while(curr !== -1 && curr !== startNode) {
            let p = djParent[curr];
            if(p !== -1) {
                let line = document.getElementById(`dj-edge-${p}-${curr}`);
                if(line) {
                    line.setAttribute('stroke', '#00b894'); 
                    line.setAttribute('stroke-width', '5');
                    if(line.parentNode && line.parentNode.parentNode) {
                        line.parentNode.parentNode.appendChild(line.parentNode);
                    }
                }
                let pCircle = document.getElementById(`dj-node-circle-${p}`);
                if(pCircle) { pCircle.style.stroke = "#e17055"; pCircle.style.strokeWidth = "4"; }
                await sleep(500);
                curr = p;
            } else break;
        }
    }
    isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}
// --- LCA ---
let lcaAdj = [];      
let lcaNodes = [];    
let lcaParent = [];    
let lcaDepth = [];     
function generateLCAUI() {
    const container = document.getElementById('visualizer-container');
    container.innerHTML = '';
    const positions = [
        {x: 300, y: 50},  
        {x: 180, y: 180}, 
        {x: 420, y: 180}, 
        {x: 100, y: 320},
        {x: 260, y: 320}, 
        {x: 360, y: 320}, 
        {x: 500, y: 320}, 
        {x: 60,  y: 450}  
    ];
    let nodeIDs = [0, 1, 2, 3, 4, 5, 6, 7];
    nodeIDs.sort(() => Math.random() - 0.5); 
    let activeMap = {}; 
    activeMap[0] = nodeIDs[0]; 
    activeMap[1] = nodeIDs[1]; 
    activeMap[2] = nodeIDs[2]; 
    for(let i=3; i<=7; i++) {
        if(Math.random() > 0.3) { 
            activeMap[i] = nodeIDs[i];
        }
    }
    if(!activeMap[3]) delete activeMap[7];
    const n = 8;
    lcaAdj = Array.from({length: n}, () => []);
    lcaParent = new Array(n).fill(-1);
    lcaDepth = new Array(n).fill(0);
    lcaNodes = []; 
    const visualEdges = [
        {p: 0, c: 1}, {p: 0, c: 2}, 
        {p: 1, c: 3}, {p: 1, c: 4}, 
        {p: 2, c: 5}, {p: 2, c: 6},
        {p: 3, c: 7}              
    ];
    let edgesHTML = "";
    visualEdges.forEach(edge => {
        if (activeMap[edge.p] !== undefined && activeMap[edge.c] !== undefined) {
            let u = activeMap[edge.p]; 
            let v = activeMap[edge.c]; 
            lcaAdj[u].push(v);
            lcaParent[v] = u;
            const p1 = positions[edge.p];
            const p2 = positions[edge.c];
            const pEnd = getPointAtRadius(p1, p2, 22);
            edgesHTML += `
                <line id="lca-edge-${u}-${v}" 
                      x1="${p1.x}" y1="${p1.y}" x2="${pEnd.x}" y2="${pEnd.y}" 
                      stroke="#b2bec3" stroke-width="2" marker-end="url(#arrowhead-lca)" />
            `;
        }
    });
    let rootReal = activeMap[0];
    let queue = [{u: rootReal, d: 0}];
    lcaDepth[rootReal] = 0;
    while(queue.length > 0) {
        let curr = queue.shift();
        for(let child of lcaAdj[curr.u]) {
            lcaDepth[child] = curr.d + 1;
            queue.push({u: child, d: curr.d + 1});
        }
    }
    let nodesHTML = "";
    let validOptions = []; 
    for(let i=0; i<8; i++) {
        if(activeMap[i] !== undefined) {
            let realID = activeMap[i];
            let pos = positions[i];
            validOptions.push(realID);
            nodesHTML += `
                <g transform="translate(${pos.x}, ${pos.y})">
                    <circle id="lca-node-circle-${realID}" r="22" fill="#636e72" stroke="#b2bec3" stroke-width="2" />
                    <text x="0" y="6" text-anchor="middle" fill="white" font-weight="bold" font-size="16" style="pointer-events: none;">${realID}</text>
                    <text x="28" y="5" fill="#dfe6e9" font-size="10" font-style="italic">d=${lcaDepth[realID]}</text>
                </g>
            `;
        }
    }
    validOptions.sort((a,b) => a - b);
    const optionsHTML = validOptions.map(id => `<option value="${id}">Node ${id}</option>`).join('');
    container.innerHTML = `
        <div class="lca-layout" style="display: flex; gap: 10px; height: 520px; width: 100%;"> 
            <div class="graph-area" style="flex: 2.5; background: #2d3436; border-radius: 8px; border: 1px solid #636e72; position: relative;">
                <svg width="100%" height="100%" viewBox="0 0 600 520" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <marker id="arrowhead-lca" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#b2bec3" />
                        </marker>
                    </defs>
                    ${edgesHTML}
                    ${nodesHTML}
                </svg>
            </div>

            <div class="lca-sidebar" style="flex: 1; display: flex; flex-direction: column; gap: 15px; padding: 10px; background: #2d3436; border: 1px solid #636e72; border-radius: 8px;">
                <h4 style="color:#74b9ff; text-align:center; margin:0; border-bottom:1px solid #555; padding-bottom:10px;">LCA Control</h4>
                
                <div>
                    <label style="color:#dfe6e9; font-size:13px;">Chọn Node U:</label>
                    <select id="lca-select-u" style="width:100%; padding:5px; margin-top:5px;">${optionsHTML}</select>
                </div>
                
                <div>
                    <label style="color:#dfe6e9; font-size:13px;">Chọn Node V:</label>
                    <select id="lca-select-v" style="width:100%; padding:5px; margin-top:5px;">${optionsHTML}</select>
                </div>

                <div id="lca-info" style="flex:1; background:#00000030; color:#fdcb6e; padding:10px; border-radius:5px; font-size:13px; overflow-y: auto;">
                    Đã tạo dữ liệu ngẫu nhiên.<br>Chọn U, V rồi bấm "Chạy".
                </div>
            </div>
        </div>
    `;
    if(validOptions.length >= 2) {
        let rand1 = validOptions[Math.floor(Math.random() * validOptions.length)];
        let rand2 = validOptions[Math.floor(Math.random() * validOptions.length)];
        while(rand1 === rand2) {
             rand2 = validOptions[Math.floor(Math.random() * validOptions.length)];
        }
        document.getElementById('lca-select-u').value = rand1;
        document.getElementById('lca-select-v').value = rand2;
    }
}
async function runLCA() {
    if(typeof isRunning !== 'undefined' && isRunning) {
        shouldKill = true; isRunning = false; await sleep(100);
    }
    const btnRun = document.getElementById('btn-run');
    const btnPause = document.getElementById('btn-pause');
    const infoBox = document.getElementById('lca-info');
    const uSelect = document.getElementById('lca-select-u');
    const vSelect = document.getElementById('lca-select-v');
    if(!uSelect || !vSelect) return;
    let u = parseInt(uSelect.value);
    let v = parseInt(vSelect.value);
    let uStart = u, vStart = v;
    for(let i=0; i<8; i++) {
        let circle = document.getElementById(`lca-node-circle-${i}`);
        if(circle) {
            circle.style.fill = "#636e72"; 
            circle.style.stroke = "#b2bec3";
            circle.style.strokeWidth = "2";
        }
    }
    isRunning = true;
    isPaused = false;
    shouldKill = false;
    if(btnRun) btnRun.disabled = true;
    if(btnPause) { btnPause.disabled = false; btnPause.innerText = "Tạm dừng"; }
    infoBox.innerHTML = `Bắt đầu tìm LCA của <b>${u}</b> và <b>${v}</b>...`;
    document.getElementById(`lca-node-circle-${u}`).style.fill = "#0984e3"; 
    document.getElementById(`lca-node-circle-${v}`).style.fill = "#e17055";
    await sleep(1000);
    infoBox.innerHTML += `<br>→ Bước 1: Đưa về cùng độ sâu.`;
    while (lcaDepth[u] !== lcaDepth[v]) {
        if(shouldKill) { isRunning=false; if(btnRun) btnRun.disabled=false; return; }
        while(isPaused) await sleep(100);
        if (lcaDepth[u] > lcaDepth[v]) {
            let p = lcaParent[u];
            infoBox.innerHTML += `<br>- Node ${u} (d=${lcaDepth[u]}) sâu hơn. Nhảy lên cha ${p}.`;
            document.getElementById(`lca-node-circle-${u}`).style.fill = "#636e72"; 
            u = p;
            document.getElementById(`lca-node-circle-${u}`).style.fill = "#0984e3"; 
        } else {
            let p = lcaParent[v];
            infoBox.innerHTML += `<br>- Node ${v} (d=${lcaDepth[v]}) sâu hơn. Nhảy lên cha ${p}.`;
            document.getElementById(`lca-node-circle-${v}`).style.fill = "#636e72";
            v = p;
            document.getElementById(`lca-node-circle-${v}`).style.fill = "#e17055";
        }
        await sleep(1000);
    }
    infoBox.innerHTML += `<br>→ Cả 2 đang ở độ sâu ${lcaDepth[u]}.`;
    await sleep(800);
    while (u !== v) {
        if(shouldKill) { isRunning=false; if(btnRun) btnRun.disabled=false; return; }
        while(isPaused) await sleep(100);
        infoBox.innerHTML += `<br>- ${u} khác ${v}. Cả hai cùng nhảy lên cha.`;
        document.getElementById(`lca-node-circle-${u}`).style.fill = "#636e72";
        document.getElementById(`lca-node-circle-${v}`).style.fill = "#636e72";
        u = lcaParent[u];
        v = lcaParent[v];
        if(u === v) {
        } else {
            document.getElementById(`lca-node-circle-${u}`).style.fill = "#0984e3";
            document.getElementById(`lca-node-circle-${v}`).style.fill = "#e17055";
        }
        await sleep(1000);
    }
    let lcaNode = u;
    infoBox.innerHTML += `<br><b>Tìm thấy! LCA(${uStart}, ${vStart}) = ${lcaNode}</b>`;
    let circle = document.getElementById(`lca-node-circle-${lcaNode}`);
    circle.style.fill = "#00b894"; 
    circle.style.stroke = "#fff";
    circle.style.strokeWidth = "4";
    for(let k=0; k<3; k++) {
        circle.style.opacity = "0.5"; await sleep(200);
        circle.style.opacity = "1"; await sleep(200);
    }
    isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}
/// --- BFS ---
let bfsAdj = [];
let bfsNodes = [];
let bfsVisited = [];
let bfsQueueArr = [];
function generateBFSUI() {
    const container = document.getElementById('visualizer-container');
    container.innerHTML = '';
    
    // 1. Layout Node cố định (Hình tháp) để dễ nhìn Layer
    bfsNodes = [
        {x: 300, y: 60},  // 0: Root
        {x: 180, y: 180}, // 1: Lớp 1
        {x: 300, y: 180}, // 2: Lớp 1
        {x: 420, y: 180}, // 3: Lớp 1
        {x: 120, y: 350}, // 4: Lớp 2
        {x: 240, y: 350}, // 5: Lớp 2
        {x: 360, y: 350}, // 6: Lớp 2 (Sửa toạ độ chút cho đều)
        {x: 480, y: 350}  // 7: Lớp 2 (Thêm node 7 cho đông vui)
    ];
    
    // Đổi tên node hiển thị
    const nodeNames = ["0", "1", "2", "3", "4", "5", "6", "7"];
    const n = 8;

    // 2. RANDOM HOÁ KẾT NỐI (CONNECTIONS)
    bfsAdj = Array.from({length: n}, () => []);
    let connections = [];

    // Nhóm các node theo lớp
    let layer1 = [1, 2, 3];
    let layer2 = [4, 5, 6, 7];

    // A. Nối Root (0) xuống Lớp 1 (Random ít nhất 2 đường để không bị cụt)
    // Xáo trộn lớp 1 để ngẫu nhiên
    layer1.sort(() => Math.random() - 0.5);
    
    // Chắc chắn nối 2 node đầu tiên
    connections.push({u: 0, v: layer1[0]});
    connections.push({u: 0, v: layer1[1]});
    
    // Node thứ 3 hên xui 50/50
    if(Math.random() > 0.5) connections.push({u: 0, v: layer1[2]});

    // B. Nối Lớp 1 xuống Lớp 2
    // Đảm bảo mỗi node ở Lớp 2 đều có ít nhất 1 cha (để không bị cô lập)
    layer2.forEach(child => {
        // Chọn ngẫu nhiên 1 cha từ layer 1
        let randomParent = layer1[Math.floor(Math.random() * layer1.length)];
        connections.push({u: randomParent, v: child});
        
        // 30% cơ hội có thêm 1 cha nữa (Tạo đa đường dẫn - Graph)
        if(Math.random() > 0.7) {
            let extraParent = layer1[Math.floor(Math.random() * layer1.length)];
            if(extraParent !== randomParent) {
                connections.push({u: extraParent, v: child});
            }
        }
    });

    // C. (Tuỳ chọn) Nối ngang hàng (Cross edges) để tạo vòng
    // Ví dụ nối 1->2 hoặc 2->3
    if(Math.random() > 0.6) connections.push({u: 1, v: 2});
    if(Math.random() > 0.6) connections.push({u: 2, v: 3});

    // 3. VẼ DÂY VÀ NODE
    let edgesHTML = "";
    connections.forEach(pair => {
        // Thêm vào danh sách kề cho thuật toán chạy
        bfsAdj[pair.u].push(pair.v);
        
        const p1 = bfsNodes[pair.u];
        const p2 = bfsNodes[pair.v];
        const pEnd = getPointAtRadius(p1, p2, 22);

        edgesHTML += `
            <line id="bfs-edge-${pair.u}-${pair.v}" 
                  x1="${p1.x}" y1="${p1.y}" x2="${pEnd.x}" y2="${pEnd.y}" 
                  stroke="#b2bec3" stroke-width="2" marker-end="url(#arrowhead-bfs)" />
        `;
    });

    let nodesHTML = bfsNodes.map((pos, i) => `
    <g transform="translate(${pos.x}, ${pos.y})">
            <circle id="bfs-node-circle-${i}" r="22" fill="#636e72" stroke="#b2bec3" stroke-width="2" />
            <text x="0" y="6" text-anchor="middle" fill="white" font-weight="bold" font-size="16" style="pointer-events: none;">${nodeNames[i]}</text>
        </g>
    `).join('');

    // 4. RENDER HTML
    container.innerHTML = `
        <div class="bfs-layout" style="display: flex; gap: 10px; height: 520px; width: 100%;"> 
            <div class="graph-area" style="flex: 2.5; background: #2d3436; border: 1px solid #636e72; position: relative;">
                <svg width="100%" height="100%" viewBox="0 0 600 520" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <marker id="arrowhead-bfs" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#b2bec3" />
                        </marker>
                    </defs>
                    ${edgesHTML}
                    ${nodesHTML}
                </svg>
            </div>

            <div class="bfs-sidebar" style="flex: 1; display: flex; flex-direction: column; gap: 10px; padding: 10px; background: #2d3436; border: 1px solid #636e72;">
                <div style="background: #00000030; padding: 10px; border-radius: 5px; border: 1px solid #636e72;">
                    <h5 style="color:#e17055; margin:0 0 5px 0; text-align:center;">Queue (Hàng Đợi)</h5>
                    <div id="bfs-queue-vis" style="display:flex; gap:5px; height:40px; overflow-x:auto; align-items:center; padding: 2px;">
                        <span style="color:#636e72; font-size:12px; width:100%; text-align:center;">Empty</span>
                    </div>
                </div>

                <h4 style="color:#a29bfe; text-align:center; margin:0; border-bottom:1px solid #555; padding-bottom:10px;">BFS Log</h4>
                <div id="bfs-info" style="flex:1; background:#00000030; color:#fdcb6e; padding:10px; font-size:13px; overflow-y: auto;">
                    Đã tạo đồ thị ngẫu nhiên.<br>Node 0 là gốc.
                </div>
            </div>
        </div>
    `;
}
function updateQueueUI() {
    const qContainer = document.getElementById('bfs-queue-vis');
    if(!qContainer) return;
    
    if(bfsQueueArr.length === 0) {
        qContainer.innerHTML = `<span style="color:#636e72; font-size:12px; width:100%; text-align:center;">Empty</span>`;
        return;
    }

    // Vẽ các phần tử trong Queue
    qContainer.innerHTML = bfsQueueArr.map(id => 
        `<div style="min-width:30px; height:30px; background:#e17055; color:white; border-radius:4px; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:14px; box-shadow: 2px 2px 5px rgba(0,0,0,0.5);">${id}</div>`
    ).join('');
}
async function runBFS() {
    if(typeof isRunning !== 'undefined' && isRunning) { shouldKill = true; isRunning = false; await sleep(100); }
    const btnRun = document.getElementById('btn-run');
    const btnPause = document.getElementById('btn-pause');
    const infoBox = document.getElementById('bfs-info');

    // 2. Init Data
    if (!bfsAdj || bfsAdj.length === 0) { alert("Chưa có dữ liệu!"); return; }
    
    // Reset UI
    const n = 7;
    for(let i=0; i<n; i++) {
        let c = document.getElementById(`bfs-node-circle-${i}`);
        if(c) { c.style.fill="#636e72"; c.style.stroke="#b2bec3"; c.style.strokeWidth="2"; }
    }
    document.querySelectorAll('line[id^="bfs-edge-"]').forEach(l => { 
        l.setAttribute('stroke', '#b2bec3'); l.setAttribute('stroke-width', '2'); 
    });

    // 3. Setup BFS
    isRunning = true; isPaused = false; shouldKill = false;
    if(btnRun) btnRun.disabled = true; 
    if(btnPause) { btnPause.disabled = false; btnPause.innerText = "Tạm dừng"; }

    let startNode = 0;
    bfsVisited = new Array(n).fill(false);
    bfsQueueArr = []; // Clear queue

    // --- BẮT ĐẦU THUẬT TOÁN ---
    infoBox.innerHTML = `Bắt đầu: Push <b>${startNode}</b> vào Queue.`;
    bfsVisited[startNode] = true;
    bfsQueueArr.push(startNode);
    updateQueueUI();
    document.getElementById(`bfs-node-circle-${startNode}`).style.fill = "#e17055"; 
    await sleep(1000);
    while(bfsQueueArr.length > 0) {
        if(shouldKill) break;
        while(isPaused) { infoBox.innerHTML = "Tạm dừng..."; await sleep(100); }
        let u = bfsQueueArr.shift();
        updateQueueUI();
        let uCircle = document.getElementById(`bfs-node-circle-${u}`);
        if(uCircle) { uCircle.style.fill = "#0984e3"; uCircle.style.stroke = "#fff"; }
        infoBox.innerHTML = `Lấy <b>${u}</b> ra khỏi Queue để xét.`;
        await sleep(800);
        let neighbors = bfsAdj[u];
        if(neighbors.length > 0) {
            infoBox.innerHTML += `<br>→ Duyệt các con của ${u}:`;
            for(let v of neighbors) {
                if(shouldKill) { isRunning = false; if(btnRun) btnRun.disabled=false; return; }
                while(isPaused) await sleep(100);
                let line = document.getElementById(`bfs-edge-${u}-${v}`);
                if(line) { line.setAttribute('stroke', '#0984e3'); line.setAttribute('stroke-width', '4'); }
                await sleep(300);
                if(!bfsVisited[v]) {
                    bfsVisited[v] = true;
                    bfsQueueArr.push(v);
                    updateQueueUI();
                    let vCircle = document.getElementById(`bfs-node-circle-${v}`);
                    if(vCircle) vCircle.style.fill = "#e17055";
                    infoBox.innerHTML += ` [Thêm ${v}]`;
                    await sleep(800);
                } else {
                    if(line) line.setAttribute('stroke', '#b2bec3'); // Trả màu dây
                }
                if(line) { line.setAttribute('stroke', '#b2bec3'); line.setAttribute('stroke-width', '2'); }
            }
        } else {
            infoBox.innerHTML += `<br>→ ${u} là lá (không có con).`;
        }
        if(uCircle) { uCircle.style.fill = "#00b894"; uCircle.style.strokeWidth = "2"; }
        await sleep(500);
    }
    infoBox.innerHTML += "<br><b>Hàng đợi rỗng. Hoàn tất BFS!</b>";
    isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}
/// --- DFS ---
let dfsAdj = [];
let dfsNodes = [];
let dfsVisited = [];
let dfsStackArr = [];
function generateDFSUI() {
    const container = document.getElementById('visualizer-container');
    container.innerHTML = '';
    dfsNodes = [
        {x: 60,  y: 250}, 
        {x: 200, y: 100}, 
        {x: 200, y: 400}, 
        {x: 400, y: 100}, 
        {x: 400, y: 400}, 
        {x: 540, y: 250}  
    ];
    const n = 6;
    const nodeNames = ["A", "B", "C", "D", "E", "F"];
    dfsAdj = Array.from({length: n}, () => []);
    const connections = [
        {u: 0, v: 1}, {u: 0, v: 2}, 
        {u: 1, v: 3}, {u: 1, v: 4}, 
        {u: 2, v: 4}, 
        {u: 3, v: 5}, 
        {u: 4, v: 5}
    ];
    let edgesHTML = "";
    connections.forEach(pair => {
        dfsAdj[pair.u].push(pair.v);
        const p1 = dfsNodes[pair.u];
        const p2 = dfsNodes[pair.v];
        const pEnd = getPointAtRadius(p1, p2, 22);
        edgesHTML += `
            <line id="dfs-edge-${pair.u}-${pair.v}" 
                  x1="${p1.x}" y1="${p1.y}" x2="${pEnd.x}" y2="${pEnd.y}" 
                  stroke="#b2bec3" stroke-width="2" marker-end="url(#arrowhead-dfs)" />
        `;
    });
    let nodesHTML = dfsNodes.map((pos, i) => `
        <g transform="translate(${pos.x}, ${pos.y})">
            <circle id="dfs-node-circle-${i}" r="22" fill="#636e72" stroke="#b2bec3" stroke-width="2" />
            <text x="0" y="6" text-anchor="middle" fill="white" font-weight="bold" font-size="16" style="pointer-events: none;">${nodeNames[i]}</text>
            
            <text id="dfs-status-${i}" x="0" y="-30" text-anchor="middle" fill="#dfe6e9" font-size="11" font-weight="bold" style="opacity:0">Visited</text>
        </g>
    `).join('');
    container.innerHTML = `
        <div class="dfs-layout" style="display: flex; gap: 10px; height: 520px; width: 100%;"> 
            <div class="graph-area" style="flex: 2.5; background: #2d3436; border: 1px solid #636e72; position: relative;">
                <svg width="100%" height="100%" viewBox="0 0 600 520" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <marker id="arrowhead-dfs" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#b2bec3" />
                        </marker>
                    </defs>
                    ${edgesHTML}
                    ${nodesHTML}
                </svg>
            </div>

            <div class="dfs-sidebar" style="flex: 1; display: flex; flex-direction: column; gap: 10px; padding: 10px; background: #2d3436; border: 1px solid #636e72;">
                <h4 style="color:#a29bfe; text-align:center; margin:0; border-bottom:1px solid #555; padding-bottom:10px;">DFS Log</h4>
                
                <div id="dfs-info" style="flex:1; background:#00000030; color:#fdcb6e; padding:10px; font-size:13px; overflow-y: auto;">
                Đồ thị đã sẵn sàng.<br>Bắt đầu từ Node A.
                </div>
            </div>
        </div>
    `;
}
async function runDFS() {
    if(typeof isRunning !== 'undefined' && isRunning) { shouldKill = true; isRunning = false; await sleep(100); }
    const btnRun = document.getElementById('btn-run');
    const btnPause = document.getElementById('btn-pause');
    const infoBox = document.getElementById('dfs-info');
    const nodeNames = ["A", "B", "C", "D", "E", "F"];
    if (!dfsAdj || dfsAdj.length === 0) { alert("Chưa có dữ liệu!"); return; }
    dfsVisited = new Array(6).fill(false);
    for(let i=0; i<6; i++) {
        let c = document.getElementById(`dfs-node-circle-${i}`);
        let t = document.getElementById(`dfs-status-${i}`);
        if(c) { c.style.fill="#636e72"; c.style.stroke="#b2bec3"; c.style.strokeWidth="2"; }
        if(t) t.style.opacity = "0";
    }
    document.querySelectorAll('line[id^="dfs-edge-"]').forEach(l => { 
        l.setAttribute('stroke', '#b2bec3'); l.setAttribute('stroke-width', '2'); 
    });
    isRunning = true; isPaused = false; shouldKill = false;
    if(btnRun) btnRun.disabled = true; 
    if(btnPause) { btnPause.disabled = false; btnPause.innerText = "Tạm dừng"; }
    infoBox.innerHTML = "Bắt đầu thuật toán DFS từ Node A...";
    await sleep(800);
    async function dfsRecursive(u) {
        if(shouldKill) return;
        dfsVisited[u] = true;
        let circle = document.getElementById(`dfs-node-circle-${u}`);
        let label = document.getElementById(`dfs-status-${u}`);
        if(circle) circle.style.fill = "#0984e3"; 
        if(label) { label.textContent = "Visiting"; label.style.opacity = "1"; label.style.fill = "#74b9ff"; }
        infoBox.innerHTML += `<br>→ Thăm <b>${nodeNames[u]}</b>`;
        await sleep(1000);
        let neighbors = dfsAdj[u].sort((a,b) => a-b); 
        for (let v of neighbors) {
            if(shouldKill) return;
            while(isPaused) { infoBox.innerHTML += "."; await sleep(500); }
            if (!dfsVisited[v]) {
                let line = document.getElementById(`dfs-edge-${u}-${v}`);
                if(line) { line.setAttribute('stroke', '#0984e3'); line.setAttribute('stroke-width', '4'); }
                infoBox.innerHTML += `<br>... đi sâu xuống ${nodeNames[v]}`;
                await sleep(800);
                await dfsRecursive(v);
                if(shouldKill) return;
                infoBox.innerHTML += `<br>← Quay lui về <b>${nodeNames[u]}</b>`;
                if(circle) circle.style.fill = "#0984e3"; 
                if(line) { line.setAttribute('stroke', '#b2bec3'); line.setAttribute('stroke-width', '2'); } // Trả màu dây
                await sleep(800);
            }
        }
        if(circle) {
            circle.style.fill = "#00b894"; 
            circle.style.stroke = "#fff";
        }
        if(label) { label.textContent = "Finished"; label.style.fill = "#55efc4"; }
        infoBox.innerHTML += `<br>✓ Node <b>${nodeNames[u]}</b> đã xong.`;
        await sleep(500);
    }
    await dfsRecursive(0); 
    infoBox.innerHTML += "<br><b>Hoàn tất thuật toán DFS!</b>";
    isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}
// ==========================================
// TRIE UI GENERATOR
// ==========================================

let trieWords = [];
let trieRoot = null;
let trieNodesMap = {}; 

function generateTrieUI() {
    const container = document.getElementById('visualizer-container');
    
    // 1. Tạo ngẫu nhiên 1 nhóm từ (Cố tình cho các từ có chung tiền tố để cây đẹp)
    const wordPools = [
        ["CAT", "CAR", "DOG", "DOT"],
        ["SET", "SEA", "BAT", "BAR"],
        ["TEA", "TEN", "IN", "INN"],
        ["API", "APP", "WEB", "WET"]
    ];
    trieWords = wordPools[Math.floor(Math.random() * wordPools.length)];

    // 2. Xây dựng cây Trie logic ngầm để tính tọa độ
    trieRoot = { id: 'trie-root', char: 'Root', children: {}, isEnd: false };
    let trieNodeCounter = 0;
    trieNodesMap = { 'trie-root': trieRoot };

    for (let word of trieWords) {
        let curr = trieRoot;
        for (let char of word) {
            if (!curr.children[char]) {
                trieNodeCounter++;
                let newId = `trie-node-${trieNodeCounter}`;
                let newNode = { id: newId, char: char, children: {}, isEnd: false };
                curr.children[char] = newNode;
                trieNodesMap[newId] = newNode;
            }
            curr = curr.children[char];
        }
        curr.isEnd = true;
    }

    // 3. Tính toán Tọa độ X, Y (Cân bằng cây)
    let leafX = 40;
    function calculateLayout(node, level) {
        let keys = Object.keys(node.children);
        // Nếu là node lá (Cuối cành)
        if (keys.length === 0) {
            node.x = leafX;
            leafX += 60; // Khoảng cách giữa các node lá
            node.y = level * 70 + 30; // 70px mỗi tầng
            return;
        }
        
        let sumX = 0;
        for (let k of keys) {
            calculateLayout(node.children[k], level + 1);
            sumX += node.children[k].x;
        }
        // Cha nằm giữa các con
        node.x = sumX / keys.length;
        node.y = level * 70 + 30;
    }
    calculateLayout(trieRoot, 0);

    // Dịch toàn bộ cây ra giữa khung nếu cây nhỏ
    const canvasWidth = container.offsetWidth || 800;
    const treeWidth = leafX;
    const offsetX = (canvasWidth > treeWidth) ? (canvasWidth - treeWidth) / 2 : 0;

    // 4. Sinh mã HTML
    let nodesHTML = '';
    let linesHTML = '';

    function drawTrie(node) {
        let finalX = node.x + offsetX;
        
        // Root luôn hiện sẵn, các node khác ẩn
        let extraClass = node === trieRoot ? 'root visible' : ''; 
        let endClass = node.isEnd ? 'is-end' : '';
        
        nodesHTML += `<div id="${node.id}" class="trie-node ${extraClass} ${endClass}" style="left: ${finalX}px; top: ${node.y}px;">${node.char}</div>`;

        for (let k in node.children) {
            let child = node.children[k];
            let childX = child.x + offsetX;
            
            // Vẽ dây từ tâm (node 36px -> tâm +18px)
            linesHTML += `<line id="line-${node.id}-${child.id}" class="trie-line" x1="${finalX + 18}" y1="${node.y + 18}" x2="${childX + 18}" y2="${child.y + 18}" />`;
            
            drawTrie(child);
        }
    }
    drawTrie(trieRoot);

    // Xuất ra layout y hệt Segment Tree (Cây ở trên, Log bo tròn ở dưới)
    container.innerHTML = `
        <div class="st-container-wrapper">
            <div class="trie-canvas">
                <svg class="st-svg">${linesHTML}</svg>
                ${nodesHTML}
            </div>
            <div id="trie-log-box" class="st-log-box">
                Sẵn sàng: Chuẩn bị chèn các từ [${trieWords.join(', ')}] vào cây rỗng.
            </div>
        </div>
    `;
}
// ==========================================
// RUNNER: TRIE SIMULATION
// ==========================================
async function runTrie() {
    if(typeof isRunning !== 'undefined' && isRunning) { shouldKill = true; isRunning = false; await sleep(100); }
    const btnRun = document.getElementById('btn-run');
    const btnPause = document.getElementById('btn-pause');
    const logBox = document.getElementById('trie-log-box');

    isRunning = true; isPaused = false; shouldKill = false;
    if(btnRun) btnRun.disabled = true;
    if(btnPause) { btnPause.disabled = false; btnPause.innerText = "Tạm dừng"; }

    // Reset lại màn hình (Ẩn toàn bộ cây trừ root)
    document.querySelectorAll('.trie-node:not(.root)').forEach(el => {
        el.classList.remove('visible', 'trie-active', 'trie-new');
        el.style.backgroundColor = ""; // Reset inline color
    });
    document.querySelectorAll('.trie-line').forEach(el => {
        el.classList.remove('visible', 'active');
    });
    document.getElementById('trie-root').classList.remove('trie-active');

    logBox.innerHTML = `Bắt đầu chèn lần lượt các từ: <b>${trieWords.join(', ')}</b>`;
    await sleep(1500);

    // Duyệt qua từng từ
    for (let word of trieWords) {
        if(shouldKill) break;
        logBox.innerHTML = `Đang xử lý từ: <b>"${word}"</b>`;
        await sleep(800);

        let currNode = trieRoot;
        let currEl = document.getElementById(currNode.id);
        currEl.classList.add('trie-active'); // Sáng root
        await sleep(500);

        // Duyệt qua từng chữ cái của từ đó
        for (let char of word) {
            if(shouldKill) { isRunning=false; if(btnRun) btnRun.disabled=false; return; }
            while(isPaused) { logBox.innerHTML = "Đang tạm dừng..."; await sleep(100); }

            let nextNode = currNode.children[char];
            let nextEl = document.getElementById(nextNode.id);
            let lineEl = document.getElementById(`line-${currNode.id}-${nextNode.id}`);

            currEl.classList.remove('trie-active');

            // NẾU NODE NÀY CHƯA HIỆN -> TỨC LÀ NHÁNH MỚI
            if (!nextEl.classList.contains('visible')) {
                logBox.innerHTML = `Chưa có nhánh '${char}'. -> <b>Tạo Node mới '${char}'</b>`;
                nextEl.classList.add('visible', 'trie-new'); // Bật hiện node + Màu cam
                if(lineEl) lineEl.classList.add('visible', 'active'); // Bật dây nối
                await sleep(800);
                nextEl.classList.remove('trie-new'); // Trả về màu bình thường
            } 
            // NẾU NODE ĐÃ CÓ SẴN (CHUNG TIỀN TỐ)
            else {
                logBox.innerHTML = `Đã có sẵn nhánh '${char}'. -> <b>Đi tiếp xuống '${char}'</b>`;
                if(lineEl) lineEl.classList.add('active'); // Dây nối sáng xanh
                await sleep(800);
            }

            // Đi xuống node con
            nextEl.classList.add('trie-active');
            if(lineEl) lineEl.classList.remove('active'); // Trả màu dây về xám

            currNode = nextNode;
            currEl = nextEl;
        }

        // Đánh dấu kết thúc từ
        logBox.innerHTML = `Đã chèn xong <b>"${word}"</b>. Đánh dấu Node kết thúc.`;
        currEl.classList.remove('trie-active');
        currEl.style.backgroundColor = "#00b894"; // Đổi nền màu xanh lá
        await sleep(1000);
        currEl.style.backgroundColor = ""; // Trả về để CSS tự lo viền xanh is-end
    }

    logBox.innerHTML = `<b>Hoàn tất xây dựng cây Trie!</b>`;
    logBox.style.backgroundColor = "#55efc4"; // Highlight log kết thúc
    isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}// ==========================================
// TWO POINTERS UI GENERATOR
// ==========================================

let tpArr = [];
let tpTarget = 0;

function generateTwoPointersUI() {
    const container = document.getElementById('visualizer-container');

    // 1. Tạo ngẫu nhiên 10 số và SẮP XẾP TĂNG DẦN (Bắt buộc với Two Pointers)
    const n = 10;
    tpArr = Array.from({length: n}, () => Math.floor(Math.random() * 25) + 1).sort((a, b) => a - b);

    // 2. Chọn ngẫu nhiên 2 vị trí bất kỳ để làm đáp án ẩn (tạo Target)
    let idx1 = Math.floor(Math.random() * (n/2));
    let idx2 = Math.floor(n/2 + Math.random() * (n/2));
    tpTarget = tpArr[idx1] + tpArr[idx2];

    // 3. Tạo mã HTML cho mảng
    let cellsHTML = tpArr.map((val, idx) => `
        <div id="tp-cell-${idx}" class="tp-cell">
            ${val}
            <div id="tp-ptr-L-${idx}" class="tp-pointer left">L</div>
            <div id="tp-ptr-R-${idx}" class="tp-pointer right">R</div>
        </div>
    `).join('');

    // Đổ ra giao diện theo cấu trúc Flexbox dùng chung
    container.innerHTML = `
        <div class="st-container-wrapper">
            <div class="tp-canvas">
                <div class="tp-target-box">Target: ${tpTarget}</div>
                <div class="tp-array">
                    ${cellsHTML}
                </div>
            </div>
            <div id="tp-log-box" class="st-log-box">
                Đã tạo mảng tăng dần. Sẵn sàng tìm cặp có tổng = ${tpTarget}.
            </div>
        </div>
    `;
}
// ==========================================
// RUNNER: TWO POINTERS
// ==========================================
async function runTwoPointers() {
    if(typeof isRunning !== 'undefined' && isRunning) { shouldKill = true; isRunning = false; await sleep(100); }
    const btnRun = document.getElementById('btn-run');
    const btnPause = document.getElementById('btn-pause');
    const logBox = document.getElementById('tp-log-box');

    isRunning = true; isPaused = false; shouldKill = false;
    if(btnRun) btnRun.disabled = true;
    if(btnPause) { btnPause.disabled = false; btnPause.innerText = "Tạm dừng"; }

    // Reset lại UI
    document.querySelectorAll('.tp-pointer').forEach(el => el.style.opacity = '0');
    document.querySelectorAll('.tp-cell').forEach(el => {
        el.className = 'tp-cell';
    });
    logBox.style.backgroundColor = "#dfe6e9";

    // Khởi tạo 2 con trỏ
    let left = 0;
    let right = tpArr.length - 1;

    logBox.innerHTML = `Đặt Left ở đầu mảng (Chỉ số 0), Right ở cuối mảng (Chỉ số ${right}).`;
    await sleep(1500);

    // Vòng lặp Two Pointers
    while (left < right) {
        if(shouldKill) { isRunning = false; if(btnRun) btnRun.disabled=false; return; }
        while(isPaused) { logBox.innerHTML = "Đang tạm dừng..."; await sleep(100); }

        // Lấy DOM Elements
        let cellL = document.getElementById(`tp-cell-${left}`);
        let cellR = document.getElementById(`tp-cell-${right}`);
        let ptrL = document.getElementById(`tp-ptr-L-${left}`);
        let ptrR = document.getElementById(`tp-ptr-R-${right}`);

        // Bật highlight và hiện con trỏ
        cellL.classList.add('active-left');
        cellR.classList.add('active-right');
        ptrL.style.opacity = '1';
        ptrR.style.opacity = '1';

        // Tính tổng
        let sum = tpArr[left] + tpArr[right];
        logBox.innerHTML = `Đang xét L=${left}, R=${right}.<br>Tổng: ${tpArr[left]} + ${tpArr[right]} = <b>${sum}</b>`;
        await sleep(1500);

        if (sum === tpTarget) {
            // TÌM THẤY
            logBox.innerHTML = `<b>Tuyệt vời!</b> Tổng ${sum} bằng đúng Target ${tpTarget}.`;
            cellL.classList.remove('active-left');
            cellR.classList.remove('active-right');
            cellL.classList.add('found');
            cellR.classList.add('found');
            logBox.style.backgroundColor = "#55efc4";
            break; 
            
        } else if (sum < tpTarget) {
            // NHỎ HƠN -> TĂNG LEFT
            logBox.innerHTML = `Tổng (${sum}) < Target (${tpTarget}).<br>→ Cần số lớn hơn, ta <b>tăng con trỏ Left</b>.`;
            await sleep(1200);
            
            // Xóa highlight và ẩn con trỏ hiện tại đi để chuẩn bị nhích lên
            ptrL.style.opacity = '0';
            cellL.classList.remove('active-left');
            left++;
            
        } else {
            // LỚN HƠN -> GIẢM RIGHT
            logBox.innerHTML = `Tổng (${sum}) > Target (${tpTarget}).<br>→ Cần số nhỏ hơn, ta <b>giảm con trỏ Right</b>.`;
            await sleep(1200);
            
            ptrR.style.opacity = '0';
            cellR.classList.remove('active-right');
            right--;
        }
    }

    // Trường hợp xấu (thường hàm random của mình đã né được TH này)
    if (left >= right && (tpArr[left] + tpArr[right] !== tpTarget)) {
        logBox.innerHTML = `<b>Kết thúc:</b> Không tìm thấy cặp số nào có tổng = ${tpTarget}.`;
        logBox.style.backgroundColor = "#fab1a0";
    }

    isRunning = false;
    if(btnRun) btnRun.disabled = false;
    if(btnPause) btnPause.disabled = true;
}
