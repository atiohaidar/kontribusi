export const formConfig = [
    {
        type: 'text',
        id: 'name',
        label: 'Nama',
        required: true
    },
    {
        type: 'email',
        id: 'email',
        label: 'Email',
        required: true
    },
    {
        type: 'number',
        id: 'NIM',
        label: 'NIM',
        required: true,
        onInput: 'handleNIMInput'
    },
    {
        type: 'radio',
        id: 'faculty',
        label: 'Fakultas',
        options: ['FIF', 'FRI', 'FIK', 'FTE', 'FKB', 'FEB', 'FIT'],
        required: true
    },
    {
        type: 'text',
        id: 'angkatan',
        label: 'Angkatan',
        required: true
    },
    {
        type: 'text',
        id: 'jurusan',
        label: 'Jurusan',
        required: true
    },
    {
        type: 'date',
        id: 'birthdate',
        label: 'Tanggal Lahir',
        required: true
    },
    {
        type: 'select',
        id: 'gender',
        label: 'Jenis Kelamin',
        options: [
            { value: '', label: 'Choose...' },
            { value: 'male', label: 'Laki-laki' },
            { value: 'female', label: 'Perempuan' }
        ],
        required: true
    },
    {
        type: 'checkbox',
        id: 'interests',
        label: 'Interests',
        options: [
            { value: 'sports', label: 'Mabar' },
            { value: 'playing footbal', label: 'Main Bola' },
            { value: 'reading', label: 'Baca Buku' }
        ],
        required: true
    },
    {
        type: 'textarea',
        id: 'kesan_pesan',
        label: 'Kesan Pesan',
        required: true
    },
    {
        type: 'textarea',
        id: 'gak_tau',
        label: 'Mau ngisi apa?',
        required: true
    }
];
