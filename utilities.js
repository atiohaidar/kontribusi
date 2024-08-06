export class Utilities {
    /**
     * nentuin deadline
     * @param {Date} deadline 
     */
    static setupDeadline(deadline) {
        document.getElementById('deadline').textContent = deadline.toLocaleString();
        this.checkDeadline(deadline);
    }

    static checkDeadline(deadline) {
        setInterval(() => {
            if (new Date() > deadline) {
                this.showDeadlineMessage();
            }
        }, 1000);
    }

    static showDeadlineMessage() {
        const card = document.querySelector('.card');
        card.innerHTML = `
            <div class="card-body text-center">
                <h1>Sorry</h1>
                <p>Your form has been closed</p>
            </div>
        `;
    }

    static setupTimeAndLocation() {
        this.updateTime();
        setInterval(this.updateTime, 1000);
        this.updateLocation();
    }

    static updateTime() {
        const now = new Date();
        document.getElementById('current-time').textContent = now.toLocaleString();
    }

    static updateLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    document.getElementById('current-location').textContent = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
                    document.getElementById('latitude').value = latitude;
                    document.getElementById('longitude').value = longitude;
                },
                () => {
                    document.getElementById('current-location').textContent = 'Not available';
                }
            );
        } else {
            document.getElementById('current-location').textContent = 'Not supported';
        }
    }

    static showLoading() {
        document.getElementById('loadingSpinner').style.display = 'flex';
    }

    static hideLoading() {
        document.getElementById('loadingSpinner').style.display = 'none';
    }
    static getInfoFromNIM(){
        const INFONIM = [
            {"NIM BARU": "10101", "NIM LAMA": "1101", "JURUSAN": "S1 Teknik Telekomunikasi", "FAKULTAS": "FTE"},
            {"NIM BARU": "10102", "NIM LAMA": "1102", "JURUSAN": "S1 Teknik Elektro", "FAKULTAS": "FTE"},
            {"NIM BARU": "10103", "NIM LAMA": "1103", "JURUSAN": "S1 Teknik Komputer", "FAKULTAS": "FTE"},
            {"NIM BARU": "10104", "NIM LAMA": "1104", "JURUSAN": "S1 Teknik Fisika", "FAKULTAS": "FTE"},
            {"NIM BARU": "10105", "NIM LAMA": "1105", "JURUSAN": "S1 Teknik Biomedis", "FAKULTAS": "FTE"},
            {"NIM BARU": "10106", "NIM LAMA": "1106", "JURUSAN": "S1 Teknik Sistem Energi", "FAKULTAS": "FTE"},
            {"NIM BARU": "10201", "NIM LAMA": "1201", "JURUSAN": "S1 Teknik Industri", "FAKULTAS": "FRI"},
            {"NIM BARU": "10202", "NIM LAMA": "1202", "JURUSAN": "S1 Sistem Informasi", "FAKULTAS": "FRI"},
            {"NIM BARU": "10203", "NIM LAMA": "1203", "JURUSAN": "S1 Teknik Logistik", "FAKULTAS": "FRI"},
            {"NIM BARU": "10301", "NIM LAMA": "1301", "JURUSAN": "S1 Informatika", "FAKULTAS": "FIF"},
            {"NIM BARU": "10302", "NIM LAMA": "1302", "JURUSAN": "S1 Rekayasa Perangkat Lunak", "FAKULTAS": "FIF"},
            {"NIM BARU": "10303", "NIM LAMA": "1303", "JURUSAN": "S1 Teknologi Informasi", "FAKULTAS": "FIF"},
            {"NIM BARU": "10305", "NIM LAMA": "1305", "JURUSAN": "S1 Data Sains", "FAKULTAS": "FIF"},
            {"NIM BARU": "10401", "NIM LAMA": "1401", "JURUSAN": "S1 MBTI", "FAKULTAS": "FEB"},
            {"NIM BARU": "10402", "NIM LAMA": "1402", "JURUSAN": "S1 Akuntansi", "FAKULTAS": "FEB"},
            {"NIM BARU": "10403", "NIM LAMA": "1403", "JURUSAN": "S1 Manajemen Bisnis Rekreasi", "FAKULTAS": "FEB"},
            {"NIM BARU": "10500", "NIM LAMA": "", "JURUSAN": "", "FAKULTAS": "FKB"},
            {"NIM BARU": "10501", "NIM LAMA": "1501", "JURUSAN": "S1 Administrasi Bisnis", "FAKULTAS": "FKB"},
            {"NIM BARU": "10502", "NIM LAMA": "1502", "JURUSAN": "S1 Ilmu Komunikasi", "FAKULTAS": "FKB"},
            {"NIM BARU": "10503", "NIM LAMA": "1503", "JURUSAN": "S1 Digital Public Relation", "FAKULTAS": "FKB"},
            {"NIM BARU": "10504", "NIM LAMA": "1504", "JURUSAN": "S1 Digital Content Broadcasting", "FAKULTAS": "FKB"},
            {"NIM BARU": "10601", "NIM LAMA": "1601", "JURUSAN": "S1 Desain Komunikasi Visual", "FAKULTAS": "FIK"},
            {"NIM BARU": "10602", "NIM LAMA": "1602", "JURUSAN": "S1 Desain Produk", "FAKULTAS": "FIK"},
            {"NIM BARU": "10603", "NIM LAMA": "1603", "JURUSAN": "S1 Desain Interior", "FAKULTAS": "FIK"},
            {"NIM BARU": "10604", "NIM LAMA": "1604", "JURUSAN": "S1 Seni Rupa", "FAKULTAS": "FIK"},
            {"NIM BARU": "10605", "NIM LAMA": "1605", "JURUSAN": "S1 Kriya Tekstil dan Fashion", "FAKULTAS": "FIK"},
            {"NIM BARU": "60701", "NIM LAMA": "6701", "JURUSAN": "D3 Sistem Informasi", "FAKULTAS": "FIT"},
            {"NIM BARU": "60702", "NIM LAMA": "6702", "JURUSAN": "D3 Teknologi Komputer", "FAKULTAS": "FIT"},
            {"NIM BARU": "60703", "NIM LAMA": "6703", "JURUSAN": "D3 Sistem Informasi Akuntansi", "FAKULTAS": "FIT"},
            {"NIM BARU": "60704", "NIM LAMA": "6704", "JURUSAN": "D3 Manajemen Pemasaran", "FAKULTAS": "FIT"},
            {"NIM BARU": "60705", "NIM LAMA": "6705", "JURUSAN": "D3 Teknologi Telekomunikasi", "FAKULTAS": "FIT"},
            {"NIM BARU": "60706", "NIM LAMA": "6706", "JURUSAN": "D3 RPLA", "FAKULTAS": "FIT"},
            {"NIM BARU": "60707", "NIM LAMA": "6707", "JURUSAN": "D3 Perhotelan", "FAKULTAS": "FIT"},
            {"NIM BARU": "70608", "NIM LAMA": "", "JURUSAN": "", "FAKULTAS": "FIT"},
            {"NIM BARU": "70708", "NIM LAMA": "7708", "JURUSAN": "S1 Terapan Teknologi Rekayasa Multimedia", "FAKULTAS": "FIT"}
        ];
        const nimInput = document.getElementById('NIM');
        nimInput.addEventListener('input', () => {
            // nim harus 10 atau 12 digit
            // if (nimInput.value.length !== 10 && nimInput.value.length !== 12) {
            //     nimInput.setCustomValidity('NIM harus 10 atau 12 digit');

            // }
            if(nimInput.value.length == 10){
                const nim = INFONIM.find(info => info["NIM LAMA"] === nimInput.value.substring(0,4));
                if (nim) {
                    document.getElementById('jurusan').value = nim.JURUSAN;
                    document.getElementById('faculty-' + nim.FAKULTAS).checked = true;
                    document.getElementById('angkatan').value ="20" + nimInput.value.substring(4, 6);
                } else {
                    document.getElementById('jurusan').value = '';
                    document.getElementById('faculty-FIF').checked = false;
                    document.getElementById('faculty-FRI').checked = false;
                    document.getElementById('faculty-FIK').checked = false;
                    document.getElementById('faculty-FTE').checked = false;
                    document.getElementById('faculty-FKB').checked = false;
                    document.getElementById('faculty-FEB').checked = false;
                    document.getElementById('faculty-FIT').checked = false;
                }
            }
            else if(nimInput.value.length == 12){
                const nim = INFONIM.find(info => info["NIM BARU"] === nimInput.value.substring(0,5));
                if (nim) {
                    document.getElementById('jurusan').value = nim.JURUSAN;
                    document.getElementById('faculty-' + nim.FAKULTAS).checked = true;
                    document.getElementById('angkatan').value ="20" + nimInput.value.substring(5, 7);
                } else {
                    document.getElementById('jurusan').value = '';
                    document.getElementById('faculty-FIF').checked = false;
                    document.getElementById('faculty-FRI').checked = false;
                    document.getElementById('faculty-FIK').checked = false;
                    document.getElementById('faculty-FTE').checked = false;
                    document.getElementById('faculty-FKB').checked = false;
                    document.getElementById('faculty-FEB').checked = false;
                    document.getElementById('faculty-FIT').checked = false;
                }
            }


            
        });
    }
}
